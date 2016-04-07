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
      </div>         
    )
  }
})