import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './PortfolioItem.css';

export default class PortfolioItem extends Component {

  constructor() {
    super();
    this.removeItem = this.removeItem.bind(this);
  }

  static propTypes = {
    symbol: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,

    currentPrice: PropTypes.number.isRequired,
    currentProfit: PropTypes.number.isRequired,

    removeItem: PropTypes.func.isRequired,
  };

  removeItem (event) {
    this.props.removeItem(this.props.id);
  }

  render() {
    return (
      <div className="PortfolioItem row">

        <div className="row">
          <p> {this.props.symbol} </p>
          <p> / </p>
          <p> {this.props.quantity} * ${this.props.price} = ${this.props.price * this.props.quantity}</p>
          <p> / </p>
          <p> {this.props.date} </p>
        </div>

        <div className="row">
          <p> {this.props.currentPrice} </p>
          <p> {this.props.currentProfit} </p>
        </div>

        <div className="row" onClick={this.removeItem}>
          <button className="remove"> Remove </button>
        </div>
      </div>
    );
  }
}
