var AppDispatcher = require('../dispatchers/app-dispatcher');

module.exports = {

  createComment: function(comment) {

  	alert('ACTION. Evento createComment con comentario'+comment);

    var action = {
      actionType: "CREATE_COMMENT",
      comment: comment
    };

    AppDispatcher.dispatch(action);
  }
};