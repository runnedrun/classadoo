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

    toggleDisplay: function() {
      $(this.hiddenFields).toggle();
    },   

    gotoScratchPadUrl: function(e) {      
      var url = this.createScratchUrl(this.props.state.global.studentName)
      this.updater.update({"gotoUrl": url});
    }, 

    createScratchUrl: function(name) {
      return Util.timestampedUrl("http://scratchpad.io/classadoo-" + Util.nonAlpaToUnderscore(name))
    },

    resolveHelp: function(e) {
      this.updater.update({needsHelp: false})
    },

    render: function() {      
      var helpIndicator;
      if (this.props.state.global.needsHelp) {        
        helpIndicator = (
          <div className="help-indicator" onClick={this.resolveHelp}>
            Needs Help
          </div>
        )
      } else {
        helpIndicator = ""
      }

      var activeTab = this.getActiveTab();
      var activeUrlLink;
      if (activeTab) {
        activeUrlLink = (<div className="url">
            <a target="_blank" href={activeTab.url}>{activeTab.url}</a>
        </div>)
      } else {
        activeUrlLink = (<div className="url">
            No active tab right now?
        </div>)
      }

      var doneWithTasks  = (Number(this.props.state.global.taskIndex) > Number(this.props.state.global.stopIndex)) ? "done" : ""

      return(
        <div className={"student-state col-md-3 " + doneWithTasks}>       
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
            {helpIndicator}

            <div className="hidden-toggle text-center" onClick={this.toggleDisplay}>
              more...
            </div>

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