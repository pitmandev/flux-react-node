var React = require('react');
var ReactDOM = require('react-dom');

var CommentActionCreators = require('../actions/comment-action-creators');

var CommentForm = React.createClass({

  onSubmit: function(e) {
//    var textNode = this.refs.text.getDOMNode();
    var textNode = this.refs.text;
    var text = textNode.value;

    textNode.value = '';

    CommentActionCreators.createComment({
      text: text
    });    
  },

  render: function(props) {
    return (<div className='comment-form'><textarea ref='text'></textarea><button onClick={this.onSubmit}>Submit</button></div>);
  }
});

module.exports = CommentForm;