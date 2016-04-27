var $ = require("jquery");
var React = require('react');
require("./Util.js");
// require("./ScratchUpdater.js");

var StudentState = React.createClass({  
    componentWillMount: function() {
      this.studentUpdater = this.props.studentUpdaters[this.props.state.id];      
    },

    // componentDidUpdate: function() {      
    //   var staticDisplay = $(this.scratchDisplay).find(".static")      
    //   hljs.highlightBlock(staticDisplay[0]);
    // },

    getActiveTab: function() {
      var allTabs = this.props.state.tab;
      var activeTab;
      Object.keys(allTabs).forEach(function(tabId) {        
        if (allTabs[tabId].active) {
          activeTab = allTabs[tabId]
          activeTab.id = tabId            
        }         
      })      
      return activeTab;
    },

    toggleDisplay: function() {
      $(this.hiddenFields).toggle();
    },   

    gotoScratchPadUrl: function(e) {      
      var url = Util.createScratchUrl(this.props.state.global.studentName)
      this.studentUpdater.update({"gotoUrl": url});
    }, 

    resolveHelp: function(e) {
      this.studentUpdater.update({needsHelp: false})
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

    completeTask: function() {
      var nextTask = this.props.state.global.taskIndex + 1; 
      this.studentUpdater.update({taskIndex: nextTask});
    },

    showScreenshot: function() {      
      this.props.streamManager.screenshot(this.props.state.id);
    },

    startStream: function() {
      this.props.streamManager.start(this.props.state.id);
    },

    stopStream: function() {
      this.props.streamManager.stop(this.props.state.id);
    },

    screenshot: function() {
      this.props.streamManager.screenshot(this.props.state.id)
    },

    setActiveTabFun: function(props) {
      var self = this;
      return function() { self.studentUpdater.updateTab(self.getActiveTab().id, props) }
    },

    render: function() {      
      var self = this; 

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

      var toggleHintButton;
      var hintShown = this.props.state.global.showHint
      if (hintShown) {
        toggleHintButton = 
            <a className="hide-hint" href="#" onClick={ this.studentUpdater.updateFun({showHint: false}) }>Hide Hint</a>
      } else {
        toggleHintButton = 
            <a className="show-hint" href="#" onClick={ this.studentUpdater.updateFun({showHint: true, hintAllowed: true}) }>Show Hint</a>
      }

      var toggleHintPromptButton;
      var promptHint = this.props.state.global.promptHint
      if (promptHint) {
        toggleHintPromptButton = 
            <a className="stop-prompting-hint" href="#" onClick={ this.studentUpdater.updateFun({promptHint: false}) }>Stop Prompt</a>
        
      } else {
        toggleHintPromptButton = 
            <a className="prompt-hint" href="#" onClick={ this.studentUpdater.updateFun({promptHint: true, hintAllowed: true}) }>Prompt Hint</a>
      }


      var startOrStopStream;
      var streamStarted = this.props.state.global.doScreenshare;      
      if (streamStarted) {
        startOrStopStream = 
            <a className="start-stream-button" href="#" onClick={this.stopStream}>stop</a>                    
      } else {        
        startOrStopStream = 
            <a className="start-stream-button" href="#" onClick={this.startStream}>stream</a>                    
      }

      takeScreenshotButton = 
          <a className="take-screenshot-button" href="#" onClick={ this.screenshot }>screenshot</a>              

      var toggleToolbar;
      if (this.getActiveTab() && this.getActiveTab().toolbarOpen) {
        toggleToolbar = 
            <a className="start-stream-button" href="#" onClick={this.setActiveTabFun({toolbarOpen: false})}>close</a>                    
      } else {        
        toggleToolbar = 
            <a className="start-stream-button" href="#" onClick={this.setActiveTabFun({toolbarOpen: true})}>open</a>                    
      }

      var doneWithTasks  = (Number(this.props.state.global.taskIndex) > Number(this.props.state.global.stopIndex)) ? "done" : ""

      var clickIndicatorClass = ""
      var click = this.props.state.global.backSyncClick
      var text = "..."
  
      if (click && ((Date.now() - click.timestamp) < 2000)) {        
        clickIndicatorClass = "recent-click" 
        text = "clicked!"
        setTimeout(function() {        
          self.forceUpdate();
        }, 2000)
      }      

      var clickIndicator = 
        <div>
          <span className={"click-indicator " + clickIndicatorClass} ref={(ref) => this.clickIndicator = ref}>{text} </span>
        </div>      

      return(
        <div className={"task-" + this.props.state.global.taskIndex + " student-state col-md-3 " + doneWithTasks}>       
            <h4 className="name text-center">
              {this.props.state.global.studentName}                          
            </h4>

            <div className="task-number">
              Current Task: {this.props.state.global.taskIndex} | {this.props.state.global.elapsedTime}
            </div> 
            <div>
              <a onClick={this.completeTask}>complete Task</a>
            </div>                      
            <div>
              {toggleHintButton} | {toggleHintPromptButton}
            </div>           
            
            {activeUrlLink}
            {toggleToolbar}
            {clickIndicator}
            {helpIndicator}                                   

            <div className="hidden-toggle text-center" onClick={this.toggleDisplay}>
              more...
            </div>

            <div className="hidden-fields" ref={(ref) => this.hiddenFields = ref}>
              <div>
                {startOrStopStream} | {takeScreenshotButton}
              </div>            
              <div className="input-group url-input-group">
                <label>
                  URL:
                </label>
                <input className="form-control url-input" type="text" data-field="gotoUrl" onKeyDown={this.studentUpdater.updateOnEnter}/>
              </div>

              <button className="btn btn-primary goto-scratchpad" onClick={this.gotoScratchPadUrl}>Scratchpad</button>
            </div>
        </div>         
      )
  }
});

StudentStatesDisplayRow = React.createClass({
    render: function() {
      var props = this.props
      return(
        <div className="row">
            {this.props.states.map(function(state) { 
              return <StudentState {...props} key={state.global.studentName} state={state} />
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
      var props = this.props;
      return(
        <div>
            {this.statesObjToRows().map(function(stateRow, i) {               
              return <StudentStatesDisplayRow {...props} key={i} states={stateRow} />              
            })}           
        </div>         
      )
    }
});