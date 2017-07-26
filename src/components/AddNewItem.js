import React, {Component} from 'react';
import all from 'lodash/fp/all';
import PropTypes from 'prop-types';

export default class AddNewItem extends Component {

  inputs = {};

  static propTypes = {
    addItem: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      inputs: {
        isSymbolValid: true,
        isDateValid: true,
        isPriceValid: true,
        isQuantityValid: true,
      },
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  validate() {
    let {symbol, price, quantity, date} = this.inputs;
    if (!all([symbol, price, quantity, date])) {
      throw new Error('Invalid!')
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const {symbol, price, quantity, date} = this.inputs;

    this.props.addItem({
      symbol: symbol.value.trim(),
      price: price.value,
      quantity: quantity.value,
      date: date.value,
    });

    symbol.value = '';
    price.value = '';
    quantity.value = '';
    date.value = '';
  }

  render() {
    return (
      <form>
        <fieldset>
          <input type="text"
                 placeholder="Symbol"
                 ref={(symbol) => this.inputs.symbol = symbol}
                 aria-required={true}
                 aria-label="Symbol"
                 aria-invalid={false}
          />
          <input type="number" placeholder="Price"
                 ref={(price) => this.inputs.price = price}
                 aria-required={true}
                 aria-label="Price"
                 aria-invalid={false}
          />
          <input type="number" placeholder="Quantity"
                 ref={(quantity) => this.inputs.quantity = quantity}
                 aria-required={true}
                 aria-label="Quantity"
                 aria-invalid={false}
          />
          <input type="date"
                 ref={(date) => this.inputs.date = date}
                 aria-label="Date"
                 aria-required={true}
                 aria-invalid={false}
          />
          <button aria-label="Submit"
                  aria-invalid={false}
                  onClick={this.onSubmit}
          > + </button>
        </fieldset>
      </form>
    );
  }
}
