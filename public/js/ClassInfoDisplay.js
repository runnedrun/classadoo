var React = require('react');
var $ = require("jquery");

ClassInfoDisplay = React.createClass({  
  updateClassData: function(event) {
  	var enterKeyCode = 13;	

  	if (event.keyCode === enterKeyCode) {
  		var target = event.target;
  		var field = target.attributes["data-field"].value;  		

  		var value = $(target).html();
  		if (!(value === "null" || value === "")) {  			  			
  			target.contentEditable = false
	  		klass.data[field] = value;
        klass.update();
  		}  		  		
  		event.preventDefault();  	  		
  	}   	
  },

  makeEditable: function(event) {
  	event.target.contentEditable = true;
  },

  render: function() {
    return(
      <div className="row">       
      	  <div className="col-md-4">
      	  		<h3 data-field="name" onKeyDown={this.updateClassData} onClick={this.makeEditable}>
	      			{this.props.klass.data.name}
	      		</h3>        	
      	  </div>

          <div className="col-md-2">
              <h3 className="Number of Students">
                {this.props.numberOfStudents} students
              </h3>         
          </div>
	      
		      <div className="col-md-6">
		  		  <h3 className="input-group input-group-large">
		  		  		<span className="input-group-addon">
		  		  			Current Lesson:
		  		  		</span>
		  			  	<span className="form-control" data-field="currentLesson" onKeyDown={this.updateClassData} onClick={this.makeEditable}>
		  			  	   {this.props.klass.data.currentLesson || "null"}
		  			  	</span>        
		  		  </h3>
		  </div>        		           
      </div>         
    )
  }
});