var syncPreview = false;
$(function(){    
  // student editor
  //--------------------------------------------------------------------------------
  var editor = ace.edit("editor");
  ace.require('ace/range');
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
    enableLiveAutocompletion: true
  });

  editor.$blockScrolling = Infinity  

  // instructor preview editor 

  var instructorEditor = ace.edit("instructor-editor");
  instructorEditor.setTheme("ace/theme/tomorrow_night_eighties");
  instructorEditor.getSession().setMode("ace/mode/html");
  instructorEditor.setHighlightActiveLine(false);
  instructorEditor.getSession().setTabSize(2); 
  instructorEditor.commands.removeCommand('gotoline');
  instructorEditor.setShowPrintMargin(false);
  instructorEditor.setReadOnly(true)

  // Set up iframe.
  var mainPreview = document.getElementById('preview');    
  mainPreview.contentWindow.document.body.setAttribute('tabindex', 0);

  var instructorPreview = $("#instructor-preview");

  // Base firebase ref
  //--------------------------------------------------------------------------------

  function getInstructorPreviewContent() {
    return instructorEditor.getValue();
  }

  function getMainPreviewContent() {
    if (syncPreview && syncPreview.merged) {
      return editor.getValue() + instructorEditor.getValue();
    } else {
      return editor.getValue()
    } 
  }

  if (location.host.indexOf("localhost") > -1) {
    var ref = new Firebase('https://classadoo-sd.firebaseIO.com/students/')

  } else {
    var ref = new Firebase('https://classadoo-scratch.firebaseIO.com/students/');
  }

  var scratchpadRef = ref.child(Scratchpad.document_id);  

  var editorRef = scratchpadRef.child('editor')

  var now = new Date();
  scratchpadRef.child('updatedAt').set(now.toString());  

  if (Scratchpad.document_id != "classadoo-instructor") {        
    var instructorEditorRef = ref.child("classadoo-instructor").child("editor");    

    var preview;

    // new SyncedEditorManager(instructorEditor, $("#instructor-editor"), getInstructorPreviewContent, instructorPreview, instructorEditorRef);  
    new SyncedEditorManager(editor, $("#editor"), getMainPreviewContent, mainPreview, editorRef);
    new SyncedEditorManager(instructorEditor, $("#instructor-editor"), getMainPreviewContent, mainPreview, instructorEditorRef);  

    new ScratchpadSyncPreview(instructorEditor, editor, $("#instructor-editor"), $("#editor"), instructorPreview, $(mainPreview))

    new SelectionManager(instructorEditor, instructorEditorRef);
    new SelectionCopier(instructorEditor, editor, $("#instructor-editor"), $("#editor"));
    new ScratchpadChat(scratchpadRef);    
  } else {    
    var noUpdates = true
    new SyncedEditorManager(editor, $("#editor"), getMainPreviewContent, mainPreview, editorRef, noUpdates);
    new SelectionCreator(editor, scratchpadRef);    
  }


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

      $('#instructor-preview').css('right', '0px');
      $('#instructor-preview').css('width', window.innerWidth - e.pageX);      
      $('#instructor-preview').css('left', e.pageX + 'px');

      $('#drag-handle').css('left', (e.pageX - 5) + 'px');
      $('#commandbar, #editor, #footer, #sync-preview').css('right', window.innerWidth - e.pageX);
      $("#toggle-sync-preview").css({"width": e.pageX})
    }

  });
  
});