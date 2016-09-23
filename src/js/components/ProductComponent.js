var React = require('react');

//Componente React que pint un botón jQuery.
var ProductComponent = React.createClass({

        /* -- Just jQuery -- */
        buyButtonJquery: function(product) {
          var button = $('<button class="buy-button">$' + product.price
            + '</button>');
          
          // handle click event
          $(button).on('click', function(event) {
            event.preventDefault();
            buyProduct(product.id);
          });

          return button;
        },

        productListJustJquery: function(products, element) {
          var list = $('<ul class="product-list"></ul>');

          products.forEach(function(product) {
            var item = $('<li>' + product.name + '</li>');
            item.append(this.buyButtonJquery(product));
            list.append(item);
          });

          // replace the existing list if there is one
          var currentList = $(element).find('.product-list');
          if (currentList.length) {
            currentList.replaceWith(list);
          } else {
            $(element).append(list);
          }
        },

  componentDidMount: function() {
    this.renderBuyButton();
  },
  componentDidUpdate: function() {
    this.renderBuyButton();
  },
  render: function(props) {
    /* we need to keep a ref to the 
     * button-container so we can update it with jQuery
     */
    return (
      <li>
        {this.props.name}
        <span className="button-container" 
          ref="buttonContainer"></span>
      </li>
    );
  },
  renderBuyButton: function() {
    // render the buy button with jQuery
    $(this.refs.buttonContainer).html(
     this.buyButtonJquery(this.props)
    );
  }
});

module.exports = ProductComponent;