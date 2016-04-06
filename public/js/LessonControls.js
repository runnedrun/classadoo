var React = require('react');
var $ = require("jquery");

TaskDisplay = React.createClass({
  update: function(props) {
    var fb = this.props.fbRef;
    this.props.studentIds.forEach(function(id) {
      var state = fb.child("" + id + "/state/global");      
      state.update(props);
    })
  },  

  updateStopIndex: function(event) {          
    var target = $(event.currentTarget);    
    var index = target.parent().data("index");    
    $(".set-stop").removeClass("active");
    target.addClass("active");
    this.update({stopIndex: index});
  },

  updateTaskIndex: function(event) {  
    var target = $(event.currentTarget);
    var index = target.parent().data("index");    
    $(".set-task").removeClass("active");
    target.addClass("active");
    this.update({taskIndex: index});
  },

  render: function() {
    return (
      <tr className="task-row" data-index={this.props.index}>      
        <td className="task-index text-center">
          {this.props.index}
        </td>
        <td className="task-description">
          {this.props.task.description}
        </td>
        <td className={ "set-stop text-center " + (this.props.isCurrentStop ? "active" : "") } onClick={this.updateStopIndex}>
          <span className="glyphicon glyphicon-stop" aria-hidden="true"></span>
        </td>
        <td className="set-task text-center" onClick={this.updateTaskIndex}>
          <span className="glyphicon glyphicon-play" aria-hidden="true"></span>
        </td>
      </tr>      
    )
  }
})

LessonControls = React.createClass({
  componentWillMount: function() {
    this.firebaseRef = new Firebase("vivid-inferno-6534.firebaseIO.com/users");
    console.log("ref is", this.firebaseRef);
  },

  render: function() {
    var self = this;
    return(
      <table className="task-list">           
        <tbody>
          {this.props.tasks.map(function(task, i) {            
            var isCurrentStop = self.props.currentStopIndex == i            

            return <TaskDisplay isCurrentStop={isCurrentStop} key={i} index={i} task={task} fbRef={self.firebaseRef} studentIds={self.props.studentIds} />
          })}                                                    
        </tbody>
      </table>         
    )
  }
})