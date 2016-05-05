var React = require('react');

ScreenshotDisplay = React.createClass({    
  render: function() {
    var self = this;    

    var students = this.props.classState.students()

    var display;    
    var studentIds = Object.keys(students)
    studentIds.sort(function(a, b) {
      var screenShotA = students[a].global.screenshot || {};      
      var screenShotB = students[b].global.screenshot || {};      
      (screenshotB.timestamp || 0) - (screenShotA.timestamp || 0)
    })    

    var screenshotToShow = students[studentIds[0]].global.screenshot;    

    if (screenshotToShow) {
      display = <img className="screenshot-display" src={screenshotToShow.img} />      
    } else {
      display = <img />
    }

    var self = this;
    return(
      <div className="row">
        <div className="col-md-12 text-center">
          {display}
        </div>
      </div>
    )
  }
})