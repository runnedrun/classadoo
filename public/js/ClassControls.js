var React = require('react');
var $ = require("jquery");
require("./Util.js");

ClassControls = React.createClass({  
  gotoScratchPadUrls: function() {
    var self = this
    this.props.classUpdater.updateBasedOnStudent("gotoUrl", function(student) {            
      var name = student.state.global.studentName;      
      return self.createScratchUrl(name)
    })
  },

  gotoScratchPadUrls: function() {
    var self = this
    this.props.classUpdater.updateBasedOnStudent("gotoUrl", function(student) {            
      var name = student.state.global.studentName;      
      return Util.createScratchUrl(name)
    })
  },

  gotoFiddleUrls: function() {
    var self = this
    this.props.classUpdater.updateBasedOnStudent("gotoUrl", function(student) {            
      var name = student.state.global.studentName;      
      return Util.createFiddleUrl(name)
    })
  },

  appendToScratch: function(e) {
    var enterKeyCode = 13;  

    if (e.keyCode === enterKeyCode && !e.shiftKey) {
      var input = $(e.currentTarget);
      this.props.scratchUpdater.append(input.val());
    }
  },

  warnClass: function() {
    var message = Util.timestampedMessage("Hi! Class will be starting again in a minute. Try to finish up what you're working on, then look front.")
    this.props.classUpdater.update({popupMessage: message})
  },

  callClassBack: function() {
    var message = Util.timestampedMessage("Hi! Class is starting again, stop your work and look front please.")
    this.props.classUpdater.update({popupMessage: message})
  },  

  closeAllScratchDisplays: function() {
    $(".scratch-input").toggle();
  },

  render: function() {
    return(
      <div className="div">       
        <div className="row">       
          <div className="col-md-4">
              <div className="input-group">
                <span className="input-group-addon">
                  URL:
                </span>
                <input className="form-control url-input" type="text" data-field="gotoUrl" onKeyDown={this.props.classUpdater.updateOnEnter(Util.timestampedUrl)}/>
              </div>            
          </div>        
          <div className="col-md-2">
            <button className="btn btn-primary" onClick={this.gotoScratchPadUrls}>Scratchpad</button>
            <button className="btn btn-primary" onClick={this.gotoFiddleUrls}>JsFiddle</button>
          </div>          

          <div className="col-md-4">
              <div className="input-group">
                <span className="input-group-addon">
                  Write:
                </span>
                <textarea className="form-control scratch-append" type="text" data-field="appendToScratchpad" onKeyDown={this.appendToScratch}/>
              </div>            
          </div>
          <div className="col-md-2">
            <button className="btn btn-warning warn-btn" onClick={this.warnClass}>Warn</button>
            <button className="btn btn-danger call-back-btn" onClick={this.callClassBack}>Call Back</button>          
          </div>        
        </div>
        <div className="row">       
          <div className="col-md-2">
            <button className="btn btn-primary" onClick={this.closeAllScratchDisplays}>Toggle scratch displays</button>
          </div>
        </div>
      </div>         
    )
  }
})