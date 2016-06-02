var React = require('react');
var $ = require("jquery");

ChallengeDisplay = React.createClass({    
  shouldComponentUpdate: function(nextProps) {    
    return nextProps.solution !== this.props.solution
  },

  render: function() {    
    this.challengeTracker = this.props.challengeTracker
    var styleString = this.props.solutionStyle.replace(/;/g, "\n");
  
    return (
      <div ref={(ref) => this.docDisplay = ref} className="challenge-display row">
        <div className="col-xs-3">          
          <div>
            <img src={this.props.solution} />
          </div>
        </div>          

        <div className="col-xs-3 col-xs-offset-1">          
          <div>
            <img src={this.props.example} />
          </div>
        </div>          

        <div className="col-xs-2 col-xs-offset-1">          
          <pre>
            {styleString}
          </pre>
        </div>          
      </div>        
    )
  }
})