/************************************************************/
/******* EJEMPLO BASICO REACT CON jQuery 				*****/
/************************************************************/
var React = require('react');
var ReactDOM = require('react-dom');

var App = require('./components/app');
var ListaCompra = require('./components/listaCompra');
var Deslizador = require('./components/deslizador');

ReactDOM.render(<App />,document.getElementById('main'));

/** Componente que incluye un elemento jQuery*/
ReactDOM.render(<ListaCompra />,document.getElementById('content'));

/** Componente que incluye un Widget jQuery*/
ReactDOM.render(<Deslizador />,document.getElementById('deslizador'));