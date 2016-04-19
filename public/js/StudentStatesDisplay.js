var $ = require("jquery");
var React = require('react');
require("./Util.js");
require("./StudentUpdater.js");
require("./ScratchUpdater.js");

var StudentState = React.createClass({  
    componentWillMount: function() {
      this.updater = new StudentUpdater(this.props.state.id);
      this.scratchUpdater = new ScratchUpdater(this.props.state.global.studentName);
    },

    componentDidUpdate: function() {      
      var staticDisplay = $(this.scratchDisplay).find(".static")      
      hljs.highlightBlock(staticDisplay[0]);
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
      var url = Util.createScratchUrl(this.props.state.global.studentName)
      this.updater.update({"gotoUrl": url});
    }, 

    resolveHelp: function(e) {
      this.updater.update({needsHelp: false})
    },

    toggleScratchDisplay: function() {
      $(this.scratchDisplay).toggle();
    },

    showEditableScratchDisplay: function(e) {
      var parent = $(e.currentTarget).parent();
      parent.find(".editable").show();      
      parent.find(".static").hide();
      parent.find(".editable").focus();
    },

    makeScratchDisplayStatic: function(e) {                
      if (e.keyCode === 27) {        
        var parent = $(e.currentTarget).parent();
        parent.find(".static").show();      
        parent.find(".editable").blur();
        parent.find(".editable").hide();
        e.preventDefault();
        e.stopPropagation();
      };
    },

    syncScratchDisplay: function(e) {                      
      var content = $(e.currentTarget).text();
      this.scratchUpdater.update(content);
    },    

    appendToScratchDisplay: function(e) {
      var enterKeyCode = 13;  
      console.log(e);

      if (e.keyCode === enterKeyCode && !e.shiftKey) {
        var content = $(e.currentTarget).val();
        var currentContent = this.props.state.scratchInput

        this.scratchUpdater.update(content + "\n\n" + this.props.state.scratchInput);
      }
    },

    completeTask: function() {
      var nextTask = this.props.state.global.taskIndex + 1; 
      this.updater.update({taskIndex: nextTask});
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

            <div className="scratch-display-buttons">
              <a href="#" className="complete-task" onClick={this.completeTask}>
                complete
              </a>

              <a href="#" className="toggle-scratch-input" onClick={this.toggleScratchDisplay}>
                toggle
              </a>
            </div>   

            <div className="input-group">
              <input className="form-control scratchpad-append-input" type="text" onKeyDown={this.appendToScratchDisplay}/>
            </div>         

            <div className="scratch-input" ref={(ref) => this.scratchDisplay = ref}>
              <pre className="editable" onKeyUp={this.syncScratchDisplay} onKeyDown={this.makeScratchDisplayStatic} contentEditable="true">{this.props.state.scratchInput}</pre>
              <pre className="static" onClick={this.showEditableScratchDisplay}><code>{this.props.state.scratchInput}</code></pre>
            </div>

            <div className="hidden-toggle text-center" onClick={this.toggleDisplay}>
              more...
            </div>

            <div className="hidden-fields" ref={(ref) => this.hiddenFields = ref}>
              <div className="input-group url-input-group">
                <label>
                  URL:
                </label>
                <input className="form-control url-input" type="text" data-field="gotoUrl" onKeyDown={this.updater.updateOnEnter}/>
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