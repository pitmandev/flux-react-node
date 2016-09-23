var React = require('react');
var ProductComponent = require('./ProductComponent');

var ListaCompra = React.createClass({
  getInitialState: function(){
    return {products: []};
  },
  componentDidMount: function(){
    this.setState({products:[
      {
        id: 1,
        name: 'Book',
        price: 15
      },
      {
        id: 2,
        name: 'Burrito',
        price: 8
      },
      {
        id: 3,
        name: 'Spaceship',
        price: 999999999
      },
      {
        id: 4,
        name: 'Dinosaur Bones',
        price: 5000000
      }
    ]});
  },
  render: function(props) {
    return (
      <ul className="product-list">
        {this.state.products.map(function(product) {
          return <ProductComponent 
              key={product.id} 
              product={product} />
        })}
      </ul>
    );
  }
});

module.exports = ListaCompra;