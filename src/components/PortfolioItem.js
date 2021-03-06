import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './PortfolioItem.css';

export default class PortfolioItem extends Component {

  constructor() {
    super();
    this.removeItem = this.removeItem.bind(this);
  }

  static propTypes = {
    item: PropTypes.shape({
      symbol: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }),
    stock: PropTypes.shape({
      price: PropTypes.number.isRequired | PropTypes.string.isRequired,
      profit: PropTypes.number.isRequired | PropTypes.string.isRequired,
    }),
    removeItem: PropTypes.func.isRequired,
  };

  static defaultProps = {
    stock: {
      price: '...',
      profit: '...',
    },
    item: {},
  };

  removeItem () {
    this.props.removeItem(this.props.item.id);
  }

  render() {
    const {symbol, quantity, date, price} = this.props.item;
    return (
      <div className="PortfolioItem row">

        <div className="item row">
          <p> {symbol} </p>
          <p> / </p>
          <p> {quantity} * ${price} = ${price * quantity}</p>
          <p> / </p>
          <p> {date} </p>
        </div>

        <div className="current row">
          <p> price: {this.props.stock.price}  </p>
          <p> profit: {this.props.stock.profit} </p>
        </div>

        <div className="row" onClick={this.removeItem}>
          <button className="remove"> Remove </button>
        </div>
      </div>
    );
  }
}
