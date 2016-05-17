var React = require('react');
var $ = require("jquery");
// var hljs = require("highlight.js");
require("./AceEditor.js");
require("./ChatWindow.js");

ScratchDisplay = React.createClass({    
  componentDidMount: function() { 
    var self = this;

    // self.updateTextAreaHeight();

    // $(document).click(function(e) {       
    //   if (!self.docDisplay.contains(e.target)) {
    //     self.makeDisplayStaticAndSnapshot();          
    //     self.setRemoteScratchToEditable();
    //   }
    // })    
    // hljs.highlightBlock(this.staticPreview);
  },  

  componentDidUpdate: function() {    
    // this.updateTextAreaHeight();
    // hljs.highlightBlock(this.staticPreview);
  },

  // updateTextAreaHeight: function() {    
  //   var previewHeight = this.editablePreview.scrollHeight;
  //   $(this.editablePreview).css("height", previewHeight);
  // },

  handleEditableKeyDown: function(e) {
    // escape exits editable mode
    $preview = $(this.editablePreview)

    if (e.keyCode == 27) {         
      this.setRemoteScratchToEditable();
      $preview.blur();
    } else if (e.keyCode == 9) {   
      e.preventDefault();   
      var start = this.editablePreview.selectionStart;
      var end = this.editablePreview.selectionEnd;

      // set textarea value to: text before caret + tab + text after caret
      $preview.val($preview.val().substring(0, start)
                  + "\t"
                  + $preview.val().substring(end));

      // put caret at right position again
      this.editablePreview.selectionStart =
      this.editablePreview.selectionEnd = start + 1;
    } 
  },

  onEditableChange: function(newValue) {    
    this.scratchTracker.set(this.docId, newValue);     
  },

  makeDisplayEditableAndRealtime: function(e) {              
    // $(this.staticPreview).hide();
    // $(this.editablePreview).show();        

    this.scratchTracker.trackRealtime(this.docId);                
  },

  setRemoteScratchToReadOnly: function(e) {            
    this.scratchTracker.setReadOnly(this.docId, true);            
  },

  setRemoteScratchToEditable: function(e) {    
    this.scratchTracker.setReadOnly(this.docId, false);            
  },

  makeDisplayStaticAndSnapshot: function() {           
    // $(this.staticPreview).show();
    // $(this.editablePreview).hide();

    this.scratchTracker.offRealtime(this.docId)    
  },

  render: function() {    
    var self = this;    
    this.docId = this.props.docId;
    this.newCode = this.props.newCode;
    this.scratchTracker = this.props.scratchTracker       
  
    return (
      <div ref={(ref) => this.docDisplay = ref} className="student-display">        
        <AceEditor
          value={this.newCode || ""}
          onChange={this.onEditableChange}
          name={this.docId}
          onBlur={this.makeDisplayStaticAndSnapshot} 
          onFocus={this.makeDisplayEditableAndRealtime}          
        />
      </div>        
    )

    // return (
     // <div ref={(ref) => this.docDisplay = ref} id={this.docId} className="student-display row">
        // <div className="title"><a className="title-link" href={"https://www.classadoo.com/scratchpad/" + this.docId}>{this.docId}</a></div>
        // <pre className="static-display" ref={(ref) => this.staticPreview = ref} onClick={self.makeDisplayEditableAndRealtime}>
          // <code>
            // {this.newCode}
          // </code>
        // </pre>        
        // <textarea className="editable-display autoExpand" onBlur={this.setRemoteScratchToEditable} onFocus={this.setRemoteScratchToReadOnly} ref={(ref) => this.editablePreview = ref} onChange={self.onEditableChange} value={this.newCode} onKeyDown={self.handleEditableKeyDown}></textarea>
      // </div>    
    // )                                    
  }
})