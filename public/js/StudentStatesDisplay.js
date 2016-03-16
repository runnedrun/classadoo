var React = require('react');
require("./Util.js");

var StudentState = React.createClass({    
    getActiveTab: function() {
      var allTabs = this.props.state.tabs;
      var activeTab;
      Object.keys(allTabs).forEach(function(tabId) {        
        if (allTabs[tabId].active) {
          activeTab = allTabs[tabId]            
        }         
      })
      console.log("active tab is", activeTab);
      return activeTab;
    },

    // returns an id for a help screenshare, if the student has initiated one
    getHelpUrl: function() {
      var allTabs = this.props.state.tabs;
      
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
        <div className="student-state col-md-2">       
            <h4 className="name text-center">
              {this.props.state.studentName}                          
            </h4>

            <div className="task-number">
              Task Number: {this.props.state.taskIndex}
            </div>
            <div className="elapsed-time">
              {this.props.state.elapsedTime}
            </div>
            {activeUrlLink}
            {helpLink}
        </div>         
      )
  }
});

StudentStatesDisplayRow = React.createClass({
    render: function() {
      return(
        <div className="row">
            {this.props.states.map(function(state) { 
              return <StudentState key={state.studentName} state={state} />
            })}        	  
        </div>         
      )
  }
});

StudentStatesDisplay = React.createClass({
    statesObjToRows: function() {
      var rows = [];
      var rowSize = 6;      

      var studentStates = this.props.studentStates
      var statesCopy = studentStates.slice(0, studentStates.length);

      while (statesCopy.length > 0)
        rows.push(statesCopy.splice(0, rowSize));

      return rows
    },

    render: function() {
      return(
        <div className="container">
            {this.statesObjToRows().map(function(stateRow, i) {               
              return <StudentStatesDisplayRow key={i} states={stateRow} />              
            })}           
        </div>         
      )
    }
});