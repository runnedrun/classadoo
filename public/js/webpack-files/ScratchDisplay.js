var React = require('react');
var $ = require("jquery");
var hljs = require("highlight.js");

ScratchDisplay = React.createClass({    
  componentDidMount: function() {    
    var self = this;
    $(document).click(function(e) {    
      console.log(e.target, self.staticPreview, e.target == self.staticPreview)
      if (!((e.target == self.editablePreview) || (e.target == self.staticPreview))) {
        self.makeDisplayStaticAndSnapshot();          
        self.setRemoteScratchToEditable();
      }
    })    
    hljs.highlightBlock(this.staticPreview);
  },

  componentDidUpdate: function() {    
    hljs.highlightBlock(this.staticPreview);
  },

  handleEditableKeyDown: function(e) {
    // escape exits editable mode
    if (e.keyCode == 27) {    
      self.setRemoteScratchToEditable();
      $(self.editablePreview).blur()
    } else if (e.keyCode == 9) {      
      return false;
    } 
  },

  handleEditableKeyUp: function(e) {    
    this.scratchTracker.set(this.docId, this.editablePreview.innerText);     
  },

  makeDisplayEditableAndRealtime: function(e) {    
    console.log("back to real ssss")    

    $(this.staticPreview).hide();
    $(this.editablePreview).show();    

    this.scratchTracker.trackRealtime(this.docId);            
  },

  setRemoteScratchToReadOnly: function(e) {            
    this.scratchTracker.setReadOnly(this.docId, true);            
  },

  setRemoteScratchToEditable: function(e) {    
    this.scratchTracker.setReadOnly(this.docId, false);            
  },

  makeDisplayStaticAndSnapshot: function() {
    console.log("back to snapshot")
    
    $(this.staticPreview).show();
    $(this.editablePreview).hide();

    this.scratchTracker.offRealtime(this.docId)    
  },

  render: function() {
    var self = this;    
    this.docId = this.props.docId;
    this.newCode = this.props.newCode;
    this.scratchTracker = this.props.scratchTracker
    
    return (
      <div id={this.docId} className="student-display row">
        <div className="title"><a className="title-link" href={"https://www.classadoo.com/scratchpad/" + this.docId}>{this.docId}</a></div>
        <pre ref={(ref) => this.staticPreview = ref} onClick={self.makeDisplayEditableAndRealtime}>
          <code>
            {this.newCode}
          </code>
        </pre>        
        <pre className="editable-display" onBlur={this.setRemoteScratchToEditable} onFocus={this.setRemoteScratchToReadOnly} contentEditable='true' ref={(ref) => this.editablePreview = ref} onKeyUp={self.handleEditableKeyUp} onKeyDown={self.handleEditableKeyDown}>{this.newCode}</pre>
      </div>    
    )                                    
  }
})