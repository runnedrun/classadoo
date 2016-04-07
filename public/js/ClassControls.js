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

  createScratchUrl: function(name) {
    return Util.timestampedUrl("http://scratchpad.io/classadoo-" + Util.spaceToUnderscore(name))
  },

  warnClass: function() {
    var message = Util.timestampedMessage("Hi! Class will be starting again in a minute. Try to finish up what you're working on, then look front.")
    this.props.classUpdater.update({popupMessage: message})
  },

  callClassBack: function() {
    var message = Util.timestampedMessage("Hi! Class is starting again, stop your work and look front please.")
    this.props.classUpdater.update({popupMessage: message})
  },  

  render: function() {
    return(
      <div className="row">       
        <div className="col-md-4">
            <div className="input-group">
              <span className="input-group-addon">
                URL:
              </span>
              <input className="form-control url-input" type="text" data-field="gotoUrl" onKeyDown={this.props.classUpdater.updateOnEnter}/>
            </div>            
        </div>        
        <div className="col-md-2">
          <button className="btn btn-primary" onClick={this.gotoScratchPadUrls}>Scratchpad</button>
        </div>
        <div className="col-md-4">
            <div className="input-group">
              <span className="input-group-addon">
                Write:
              </span>
              <textarea className="form-control scratch-input" type="text" data-field="appendToScratchpad" onKeyDown={this.props.classUpdater.updateOnEnter}/>
            </div>            
        </div>
        <div className="col-md-2">
          <button className="btn btn-warning warn-btn" onClick={this.warnClass}>Warn</button>
          <button className="btn btn-danger call-back-btn" onClick={this.callClassBack}>Call Back</button>
        </div>        
      </div>         
    )
  }
})