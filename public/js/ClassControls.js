var React = require('react');
var $ = require("jquery");

ClassControls = React.createClass({  
  gotoScratchPadUrls: function() {
    this.props.classUpdater.updateBasedOnStudent("gotoUrl", function(student) {            
      var name = student.state.global.studentName;      
      return "http://scratchpad.io/classadoo-" + name
    })
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
      </div>         
    )
  }
})