var $ = require("jquery");
var React = require('react');
require("./Util.js");
require("./ChatWindow.js")

var StudentState = React.createClass({  
    getActiveTab: function() {
      var allTabs = this.tab;
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
      var url = Util.createScratchUrl(this.global.studentName)
      this.studentUpdater.update({"gotoUrl": url});
    }, 

    resolveHelp: function(e) {
      this.studentUpdater.update({needsHelp: false})
    },

    completeTask: function() {
      var nextTask = this.global.taskIndex + 1; 
      this.studentUpdater.update({taskIndex: nextTask});
    },

    showScreenshot: function() {      
      this.streamManager.screenshot(this.id);
    },

    startStream: function() {
      this.streamManager.start(this.id);
    },

    stopStream: function() {
      this.streamManager.stop(this.id);
    },

    screenshot: function() {
      this.streamManager.screenshot(this.id)
    },

    setActiveTabFun: function(props) {
      var self = this;
      return function() { self.studentUpdater.updateActiveTab(props) }
    },

    sendChat: function(value) {
      this.studentUpdater.push("chatHistory", {text: value, isStudent: false, timestamp: Firebase.ServerValue.TIMESTAMP});
      this.studentUpdater.update({"chatOpen": true});       
      this.studentUpdater.updateActiveTab({"toolbarOpen": true});       
    },

    render: function() {   
      this.global = this.props.state.global;
      this.tab = this.props.state.tab;
      this.id = this.props.state.id      
      this.studentUpdater = this.props.classState.studentUpdater(this.id);
      this.streamManager = this.props.streamManager;

      var self = this; 

      var helpIndicator;
      if (this.global.needsHelp) {        
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
      var hintShown = this.global.showHint
      if (hintShown) {
        toggleHintButton = 
            <a className="hide-hint" href="#" onClick={ this.studentUpdater.updateFun({showHint: false}) }>Hide Hint</a>
      } else {
        toggleHintButton = 
            <a className="show-hint" href="#" onClick={ this.studentUpdater.updateFun({showHint: true, hintAllowed: true}) }>Show Hint</a>
      }

      var toggleHintPromptButton;
      var promptHint = this.global.promptHint
      if (promptHint) {
        toggleHintPromptButton = 
            <a className="stop-prompting-hint" href="#" onClick={ this.studentUpdater.updateFun({promptHint: false}) }>Stop Prompt</a>
        
      } else {
        toggleHintPromptButton = 
            <a className="prompt-hint" href="#" onClick={ this.studentUpdater.updateFun({promptHint: true, hintAllowed: true}) }>Prompt Hint</a>
      }


      var startOrStopStream;
      var streamStarted = this.global.doScreenshare;      
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

      var doneWithTasks  = (Number(this.global.taskIndex) > Number(this.global.stopIndex)) ? "done" : ""

      var clickIndicatorClass = ""
      var click = this.global.backSyncClick
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
        <div className={"task-" + this.global.taskIndex + " student-state col-md-3 " + doneWithTasks}>       
            <h4 className="name text-center">
              {this.global.studentName}                          
            </h4>

            <div className="task-number">
              Current Task: {this.global.taskIndex} | {this.global.elapsedTime}
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

            <div>
              {startOrStopStream} | {takeScreenshotButton}
            </div>            

            
            <ChatWindow sendMessage={this.sendChat} chatHistory={this.props.state.global.chatHistory} / >            

            <div className="hidden-toggle text-center" onClick={this.toggleDisplay}>
              more...
            </div>

            <div className="hidden-fields" ref={(ref) => this.hiddenFields = ref}>
              <div className="input-group url-input-group">
                <label>
                  URL:
                </label>
                <input className="form-control url-input" type="text" data-field="gotoUrl" onKeyDown={this.studentUpdater.updateOnEnter}/>
              </div>

              <button className="btn btn-primary goto-scratchpad" onClick={this.gotoScratchPadUrl}>Scratchpad</button>
              <button className="btn btn-primary goto-scratchpad" onClick={this.setActiveTabFun({remoteRefresh: Date.now()})}>Refresh</button>
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

      var studentStates = this.props.classState.sortedStudents();
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