var React = require('react');
var $ = require("jquery");

TaskDisplay = React.createClass({  
  updateStopIndex: function(event) {          
    var target = $(event.currentTarget);    
    var index = target.parent().data("index");    
    $(".set-stop").removeClass("active");
    target.addClass("active");
    this.classUpdater.update({stopIndex: index});
  },

  updateTaskIndex: function(event) {  
    var target = $(event.currentTarget);
    var index = target.parent().data("index");    
    $(".set-task").removeClass("active");
    target.addClass("active");
    this.classUpdater.update({taskIndex: index});
  },

  openSampleInNewWindow: function() {
    window.open(this.props.samplePrefix + this.props.task.name + ".html", "sample", 'height:200, width:400');
    return false
  },

  hideAllButTask: function(taskIndex) {    
    var self = this;
    var cssString = ".student-state.task-" + taskIndex + " { display: block; }\n .student-state { display: none }";
    return function(e) {
      var tag;
      if ($(".task-hide-style").length) {
        tag = $(".task-hide-style");
      } else {
        console.log("creating new tag")
        tag = $("<style class='task-hide-style'>");
        $("head").append(tag);
      }

      if ($(e.currentTarget).hasClass("only-shown")) {
        tag.remove();   
        $(e.currentTarget).removeClass("only-shown");
      } else {
        tag.html(cssString);
        $(".only-shown").removeClass("only-shown");
        $(e.currentTarget).addClass("only-shown");
      }
    }    
  },

  render: function() {
    this.classUpdater = this.props.classState.allClassUpdater();
    
    return (
      <tr className="task-row" data-index={this.props.index}>      
        <td className="task-index text-center" onClick={this.hideAllButTask(this.props.index)}>
          {this.props.index}
        </td>
        <td className="task-description">
          <a onClick={this.openSampleInNewWindow}>{this.props.task.name}</a>
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
  render: function() {
    var self = this;
    return(
      <table className="task-list">           
        <tbody>
          {this.props.tasks.map(function(task, i) {            
            var isCurrentStop = self.props.currentStopIndex == i            

            return <TaskDisplay {...self.props} isCurrentStop={isCurrentStop} key={i} index={i} task={task} />
          })}                                                    
        </tbody>
      </table>         
    )
  }
})