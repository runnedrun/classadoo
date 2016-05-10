var React = require('react');
var $ = require("jquery");
var hljs = require("highlight.js");

ScratchDisplay = React.createClass({    
  componentDidMount: function() {    
    hljs.highlightBlock(this.staticPreview);
  },

  componentDidUpdate: function() {    
    hljs.highlightBlock(this.staticPreview);
  },

  handleEditableKeyDown: function(e) {
    // escape exits editable mode
    if (e.keyCode == 27) {
      console.log("making it static")
      this.makeDisplayStaticAndSnapshot();
    } else if (e.keyCode == 9) {      
      return false;
    } 
  },

  handleEditableKeyUp: function(e) {    
    this.scratchTracker.set(this.docId, this.editablePreview.innerText);     
  },

  makeDisplayEditableAndRealtime: function() {    
    console.log("back to real time")    

    $(this.staticPreview).hide();
    $(this.editablePreview).show();
    $(this.editablePreview).focus();

    this.scratchTracker.trackRealtime(this.docId);    
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
        <pre className="editable-display" contentEditable='true' ref={(ref) => this.editablePreview = ref} onBlur={self.makeDisplayStaticAndSnapshot} onKeyUp={self.handleEditableKeyUp} onKeyDown={self.handleEditableKeyDown}>{this.newCode}</pre>
      </div>    
    )                                    
  }
})