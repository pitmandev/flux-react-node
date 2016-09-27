/************************************************************/
/******* EJEMPLO BASICO REACT CON ARQUITECTURA FLUX		*****/
/************************************************************/
var React = require('react');
var ReactDOM = require('react-dom');
var Comments = require('./components/comments');
var CommentForm = require('./components/commentform');

ReactDOM.render(<Comments />, document.getElementById('commentsDiv'));
ReactDOM.render(<CommentForm />, document.getElementById('commentFormDiv'));
