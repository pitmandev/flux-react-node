var React = require('react');

var Deslizador = React.createClass({
	render: function(props){
		return (
			<div className="fotorama">
			  <img src="http://s.fotorama.io/1.jpg" />
				<img src="http://s.fotorama.io/2.jpg" />
				<img src="http://s.fotorama.io/3.jpg" />
				<img src="http://s.fotorama.io/4.jpg" />
				<img src="http://s.fotorama.io/5.jpg" />
			</div>
		);
	}
});

module.exports = Deslizador;