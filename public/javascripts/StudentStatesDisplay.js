var React = require('react');
require("./Util.js");

var StudentState = React.createClass({    
    render: function() {
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
            <div className="url">
              <a href={this.props.state.url}>{this.props.state.url}</a>
            </div>
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