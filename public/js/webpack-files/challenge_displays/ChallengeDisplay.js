var React = require('react');
var $ = require("jquery");

ChallengeDisplay = React.createClass({    
  render: function() {    
    this.challengeTracker = this.props.challengeTracker
  
    return (
      <div ref={(ref) => this.docDisplay = ref} className="student-display row text-center">
        <div dangerouslySetInnerHTML={{__html: this.props.solution}}>

        </div>        

        <div className="col-md-4 col-md-offset-1">          
          <div>
            <img src={this.props.example} />
          </div>
        </div>          
      </div>        
    )
  }
})