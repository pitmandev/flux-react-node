var React = require('react');

var CommentStore = require('../stores/comment-store');

function getStateFromStore() {
  return {
    comments: CommentStore.getAll()
  }
}

var Comments = React.createClass({

  onChange: function() {
    alert('VISTA ha cambiado')
    this.setState(getStateFromStore());
  },

  getInitialState: function() {
    return getStateFromStore();
  },

  componentDidMount: function() {
    alert('Vista comments. componentDidMount');
    CommentStore.addChangeListener(this.onChange);
  },
  componentWillUnmount: function() {
    alert('Vista comments. componentWillUnmount');
    CommentStore.removeChangeListener(this.onChange);
  },

  render: function() {

    alert("VISTA. render#####");

    var comments = this.state.comments.map(function(comment, index) {
      return (
        <div className='comment' key={'comment-' + index}>
          CAPA DE COMENTARIOS {comment.text}
        </div>
      )
    });

    return (
      <div className='comments'>
        {comments}
      </div>
    );
  }
  
});

module.exports = Comments;