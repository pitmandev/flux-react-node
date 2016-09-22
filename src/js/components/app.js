var React = require('react');
var Botoncito = require('./botoncito');

var App = React.createClass({
	render:function(){
		return (
				<div>
				<h1>Mi primer componentecito</h1>
				<Botoncito/>
				</div>
				)
	}
});

module.exports = App;