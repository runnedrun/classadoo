var $ = require("jquery");
var React = require('react');
require("./Util.js");
require("./StudentUpdater.js");

var StudentState = React.createClass({  
    componentWillMount: function() {
      this.updater = new StudentUpdater(this.props.state.id);
    },

    getActiveTab: function() {
      var allTabs = this.props.state.tab;
      var activeTab;
      Object.keys(allTabs).forEach(function(tabId) {        
        if (allTabs[tabId].active) {
          activeTab = allTabs[tabId]            
        }         
      })      
      return activeTab;
    },

    // returns an id for a help screenshare, if the student has initiated one
    getHelpUrl: function() {
      var allTabs = this.props.state.tab;
      
      var helpId;
      Object.keys(allTabs).forEach(function(tabId) {        
        if (allTabs[tabId].needsHelp) {
          helpId = allTabs[tabId].needsHelp
          return false
        }         
      })  

      if (helpId) {
        return "https://" + location.host + "/screenshare?s=" + helpId
      } else {
        return false
      }
    },

    toggleDisplay: function() {
      $(this.hiddenFields).toggle();
    },   

    gotoScratchPadUrl: function(e) {
      e.stopPropagation();
      var url = "http://scratchpad.io/classadoo-" + this.props.state.global.studentName
      this.updater.update({"gotoUrl": url});
    }, 

    render: function() {
      var helpUrl = this.getHelpUrl()

      var helpLink;
      if (helpUrl) {
        console.log("here is the help url !!!!", helpUrl);
        helpLink = (
          <div className="help-link">
            <a target="_blank" href={helpUrl}>Needs Help</a>
          </div>
        )
      } else {
        helpLink = ""
      }

      var activeTab = this.getActiveTab();
      var activeUrlLink;
      if (activeTab) {
        activeUrlLink = (<div className="url">
            <a href={activeTab.url}>{activeTab.url}</a>
        </div>)
      } else {
        activeUrlLink = (<div className="url">
            No active tab right now?
        </div>)
      }

      return(
        <div className="student-state col-md-3" onClick={this.toggleDisplay}>       
            <h4 className="name text-center">
              {this.props.state.global.studentName}                          
            </h4>

            <div className="task-number">
              Current Task: {this.props.state.global.taskIndex}
            </div>            

            <div className="elapsed-time">
              {this.props.state.global.elapsedTime}
            </div>            

            {activeUrlLink}
            {helpLink}

            <div className="hidden-fields" ref={(ref) => this.hiddenFields = ref}>
              <div className="input-group url-input-group">
                <label>
                  URL:
                </label>
                <input className="form-control url-input" type="text" onClick={function(e) { e.stopPropagation(); return false; }} data-field="gotoUrl" onKeyDown={this.updater.updateOnEnter}/>
              </div>

              <button className="btn btn-primary goto-scratchpad" onClick={this.gotoScratchPadUrl}>Scratchpad</button>
            </div>
        </div>         
      )
  }
});

StudentStatesDisplayRow = React.createClass({
    render: function() {
      var classUpdater = this.props.classUpdater
      return(
        <div className="row">
            {this.props.states.map(function(state) { 
              return <StudentState classUpdater={classUpdater} key={state.global.studentName} state={state} />
            })}        	  
        </div>         
      )
  }
});

StudentStatesDisplay = React.createClass({
    statesObjToRows: function() {
      var rows = [];
      var rowSize = 4;      

      var studentStates = this.props.studentStates
      var statesCopy = studentStates.slice(0, studentStates.length);

      while (statesCopy.length > 0)
        rows.push(statesCopy.splice(0, rowSize));

      return rows
    },

    render: function() {
      var classUpdater = this.props.classUpdater
      return(
        <div>
            {this.statesObjToRows().map(function(stateRow, i) {               
              return <StudentStatesDisplayRow classUpdater={classUpdater} key={i} states={stateRow} />              
            })}           
        </div>         
      )
    }
});