var App = require('./components/app');
var ListaCompra = require('./components/listaCompra');
var ReactDOM = require('react-dom');
var React = require('react');

ReactDOM.render(<App />,document.getElementById('main'));

/** Componente que incluye un elemento jQuery*/
ReactDOM.render(<ListaCompra />,document.getElementById('content'));