ace = require('brace')
var React = require('react');

AceEditor = React.createClass({    

  componentDidMount: function() {    
    var name = this.props.name;
    var onFocus = this.props.onFocus;
    var onBlur = this.props.onBlur;
    var onChange = this.props.onChange;
    var value = this.props.value;

    this.editor = ace.edit(name);
    this.editor.getSession().setMode('ace/mode/html');
    this.editor.setTheme('ace/theme/tomorrow_night_eighties');
    this.editor.setFontSize("10px");
    this.editor.setValue(value);
    this.editor.setShowPrintMargin(false);
    this.editor.$blockScrolling = Infinity
    this.editor.setOptions({maxLines: 30});
    this.editor.on('focus', this.onFocus);
    this.editor.on('blur', this.onBlur);    
    this.editor.on('change', this.onChange);
  },

  componentWillReceiveProps: function(nextProps) {    
    if (this.editor.getValue() !== nextProps.value) {
      var cursor = this.editor.selection.getCursor();

      // editor.setValue is a synchronous function call, change event is emitted before setValue return.
      this.silent = true;      
      this.editor.setValue(nextProps.value);
      this.editor.clearSelection()
      this.editor.moveCursorToPosition(cursor); 
      this.silent = false;
    }
  },

  componentWillUnmount: function() {
    this.editor.destroy();
    this.editor = null;
  },

  onChange: function() {
    if (this.props.onChange && !this.silent) {
      const value = this.editor.getValue();      
      this.props.onChange(value);
    }
  },

  onFocus: function() {
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  },

  onBlur: function() {
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  },

  render: function() {        
    return (
      <div id={this.props.name}>
      </div>
    );
  }
})