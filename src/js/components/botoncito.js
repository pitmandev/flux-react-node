var React = require('react');

var Botoncito = React.createClass({
	render:function(){
		return <input type='button' value='un boton' onClick={this.manejaPulsacion} />
	},
	manejaPulsacion: function(){
		alert('Eureka!');
	}
});

module.exports = Botoncito;