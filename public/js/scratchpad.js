$(function(){
  
    
  // Scratchpad Intro
  //--------------------------------------------------------------------------------
  var intro = ""
  
  
  // Ace code edtor
  //--------------------------------------------------------------------------------
  window.editor = ace.edit("editor");
  editor.setTheme("ace/theme/tomorrow_night_eighties");
  editor.getSession().setMode("ace/mode/html");
  editor.setHighlightActiveLine(false);
  editor.getSession().setTabSize(2);
  document.getElementById('editor').style.fontSize='11px';
  editor.commands.removeCommand('gotoline');
  editor.setShowPrintMargin(false);
  editor.commands.addCommand({
    name: 'showHelp',
    bindKey: {win: 'Ctrl-/',  mac: 'Command-/'},
    exec: function(editor) {
        $('#help').toggleClass('visible');
    }
  });

  editor.setOptions({
    // enableBasicAutocompletion: true,
    // enableSnippets: true,    
    enableLiveAutocompletion: true
  });

  editor.$blockScrolling = Infinity  

  // Set up iframe.
  var frame = document.getElementById('preview');  
  frame.contentWindow.document.body.setAttribute('tabindex', 0);

  var previewPreview = $("#sync-preview-preview")
  
  $(".run-js-button").click(function() {
    refreshPageWithJs($("#preview")[0]);
  })

  var firebase = '<script src="https://cdn.firebase.com/js/client/2.4.2/firebase.js"></script>'
  var jquery = '<script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>'
  var currentlyInsertedJs = "" 

  function refreshPage(iframe, editor) { 
    var iframedoc = iframe.contentWindow.document   
    if (iframedoc.body) {
      iframedoc.body.innerHTML =  jquery + "\n\n" + firebase + "\n\n" + editor.getValue();      
    }    
  }

  function refreshPageWithJs(iframe) {  
    var $iframe = $(iframe);

    var newFrame = $("<iframe id='" + iframe.id + "'>");

    var frameHeight = $iframe.height();
    var frameWidth = $iframe.width();
    var offset  = $iframe.offset()
    var frameTop  = offset.top;
    var frameLeft  = offset.left;
    var frameTop  = offset.top;    

    newFrame.css({"height": frameHeight, width: frameWidth, top: frameTop, left: frameLeft});
    var code = editor.getValue();

    var html = jquery + "\n\n" + firebase + "\n\n" + code;
    var manager = new IframeManager(newFrame);    

    $iframe.replaceWith(newFrame);    
    manager.setIframeContent(html);      
    iframe = newFrame[0]; 
  }
  // Base firebase ref
  //--------------------------------------------------------------------------------

  if (location.host.indexOf("localhost") > -1) {
    var scratchpadRef = new Firebase('https://classadoo-sd.firebaseIO.com/students/' + Scratchpad.document_id);
  } else {
    var scratchpadRef = new Firebase('https://classadoo-scratch.firebaseIO.com/students/' + Scratchpad.document_id);
  }

  var now = new Date();
  scratchpadRef.child('updatedAt').set(now.toString());  

  if (Scratchpad.document_id != "classadoo-instructor") {
    var syncPreviewRef = new Firebase('https://classadoo-scratch.firebaseIO.com/students/classadoo-instructor');
    var syncPreview = new ScratchpadSyncPreview(editor, syncPreviewRef)

    new ScratchpadChat(scratchpadRef);

    syncPreviewRef.child("editor").on('value', function(dataSnapshot) {
      var previewEditor = syncPreview.editor       
      previewEditor.setValue(dataSnapshot.child('code').val() || "");       
      refreshPage($("#sync-preview-preview")[0], previewEditor); 
       
      previewEditor.clearSelection();    
      if (dataSnapshot.child('cursor').val() === null) {
        previewEditor.moveCursorToPosition({column: 0, row: 0});  
      } else {
        previewEditor.moveCursorToPosition(dataSnapshot.child('cursor').val());  
      }            
    });
  }

  // Multiple client stuff
  //--------------------------------------------------------------------------------
  
  // Push a new child to clients that kills itself on disconnect
  var thisClientRef = scratchpadRef.child('clients').push('idle');
  thisClientRef.onDisconnect().remove()
  
  // Keep track of the number of active connections
  scratchpadRef.child('clients').on('value', function(dataSnapshot){
    
    if (dataSnapshot.val() === null) {
      scratchpadRef.child('clients').set({});
    } else {
      
      var numClients = dataSnapshot.numChildren();

      // Label the tooltip appropriately
      $('#connections-tooltip').remove();
      if (numClients === 2) {
        $('#connections').after('<span id="connections-tooltip"> 1 other viewer</span>');
      } else if (numClients === 1) {
        // do nothing
      } else {
        $('#connections').after('<span id="connections-tooltip"> '+ (numClients - 1) + ' other viewers</span>');
      }
      
      // Append proper number of dots
      $('#connections').html('');
      for (i = 1; i < dataSnapshot.numChildren(); i++) {
        $('#connections').append('<li>&nbsp;</li>');
      }
      
    }
    
  });
  
  $('#connections').hover(function(){
    $('#connections-tooltip').css('opacity', 1);
  }, function(){
    $('#connections-tooltip').css('opacity', 0);
  });
  
  
  // Code Editing
  //--------------------------------------------------------------------------------
  var scratchpadEditorRef = scratchpadRef.child('editor');

  scratchpadRef.once('value', function(dataSnapshot) {
    if (dataSnapshot.child('editor').val() === null ) {
      editor.setValue(intro);
    }
  })
  
  // When code changes, put it into the editor
  scratchpadEditorRef.on('value', function(dataSnapshot) { 
    var thisClientStatus;
    thisClientRef.once('value', function(dataSnapshot){
      thisClientStatus = dataSnapshot.val();
    });
    
    // If this is a new scratchpad, put in our intro
    var clearReadOnlyMode;
    if (thisClientStatus == 'typing') {
      // do nothing, we're the ones typing in the first place
    } else {
      window.clearTimeout(clearReadOnlyMode);
      editor.setReadOnly(true);
      editor.setValue(dataSnapshot.child('code').val() || "");
      clearReadOnlyMode = setTimeout(function(){
        editor.setReadOnly(false);
      }, 2000);
    }
    
    // Clear selection and move cursor to where it needs to be
    editor.clearSelection();
    if (dataSnapshot.child('cursor').val() === null) {
      editor.moveCursorToPosition({column: 0, row: 0});  
    } else {
      editor.moveCursorToPosition(dataSnapshot.child('cursor').val());  
    }    
  });  
  
  // On keyup, save the code and cursor data to firebase
  var typingTimeout;
  $('#editor').on('keyup', function(){
    
    // Tell firebase who is editing
    window.clearTimeout(typingTimeout);
    thisClientRef.set('typing')
    
    // Get cursor position
    var startrow = editor.selection.getRange().start.row;
    var startcolumn = editor.selection.getRange().start.column;
    var endrow = editor.selection.getRange().end.row;
    var endcolumn = editor.selection.getRange().end.column;
    
    // If nothing is highlighted, ship contents of editor and cursor data to Firebase
    if (startrow == endrow && startcolumn == endcolumn) {
      scratchpadEditorRef.set({code: editor.getValue(), cursor: editor.selection.getCursor()});
    }
    
    // Set a timeout for 2 seconds that tells firebase who is typing
    typingTimeout = setTimeout(function(){
      thisClientRef.set('idle')
    }, 2000) ;
  });
  
  // On data change, re-render the code in the iframe.
  editor.getSession().on('change', function(e) {            
    refreshPage($("#preview")[0], editor);  
  });
  
  
  // Filename Stuff
  //--------------------------------------------------------------------------------  
  var scratchpadTitleRef = scratchpadRef.child('title');
  
  // Show title on top, keep updated from server
  scratchpadTitleRef.on('value', function(titleSnapshot) {
    if (titleSnapshot.val() == null) {
      scratchpadTitleRef.set('Untitled document');
      document.title = 'Untitled document';
    } else {
      $('#title').text(titleSnapshot.val());
      document.title = titleSnapshot.val();
    }
  });
  
  // Let users update title when they click it
  $('#title').click(function(){
    var newTitle = prompt('What do you want to name your file?', $(this).text());
    if (newTitle != null) {
      scratchpadTitleRef.set(newTitle);
    }
  });
  
  // Stupid (webkit only?) hover bug fix
  $('#title').hover(function(){$(this).addClass('hover')}, function(){$(this).removeClass('hover')});
  
  // read only mode stuff 

  var readOnlyRef = scratchpadRef.child('read_only');

  readOnlyRef.on("value", function(snapshot) {
    var isReadOnly = snapshot.val();    
    editor.setReadOnly(isReadOnly);    
  })

  // Drag to resize
  //--------------------------------------------------------------------------------

  var clicking = false;
  $('#drag-handle').mousedown( function() {
    clicking = true;
    $(this).addClass('dragging');
  });
  
  $(window).mouseup( function() {
    $('#drag-handle').removeClass('dragging');
    $('body').removeClass('resizing');
    clicking = false;
  });

  $(window).mousemove( function(e) {

    if (clicking === true) {
      editor.resize();
      $('body').addClass('resizing');

      $('#preview').css('right', '0px');
      $('#preview').css('width', window.innerWidth - e.pageX);      
      $('#preview').css('left', e.pageX + 'px');

      $('#sync-preview-preview').css('right', '0px');
      $('#sync-preview-preview').css('width', window.innerWidth - e.pageX);      
      $('#sync-preview-preview').css('left', e.pageX + 'px');

      $('#drag-handle').css('left', (e.pageX - 5) + 'px');
      $('#commandbar, #editor, #footer, #sync-preview').css('right', window.innerWidth - e.pageX);
      $("#toggle-sync-preview").css({"width": e.pageX})
    }

  });
  
});