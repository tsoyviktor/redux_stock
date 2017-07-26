import React, {Component} from 'react';
import {values, every} from 'lodash';
import {
  validateSymbol,
  validateDate,
  validatePrice,
  validateQuantity
} from '../utils/validation';
import PropTypes from 'prop-types';
import './AddNewItem.css';

export default class AddNewItem extends Component {

  inputs = {};

  static propTypes = {
    addItem: PropTypes.func.isRequired,
  };

  getDefaultState() {
    return {
      isSymbolValid: true,
      isDateValid: true,
      isPriceValid: true,
      isQuantityValid: true,
    }
  }

  constructor() {
    super();
    this.state = this.getDefaultState();
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  validate() {
    return new Promise((resolve, reject) => {
      let {symbol, price, quantity, date} = this.inputs;
      this.setState(this.getDefaultState());
      Promise.resolve()
        .then(() => {
          return validateSymbol(symbol.value)
        })
        .catch(() => {
          this.setState({isSymbolValid: false})
        })
        .then(() => {
          return validatePrice(Number(price.value))
        })
        .catch(() => {
          this.setState({isPriceValid: false})
        })
        .then(() => {
          return validateQuantity(Number(quantity.value))
        })
        .catch(() => {
          this.setState({isQuantityValid: false})
        })
        .then(() => validateDate(date.value))
        .catch(() => this.setState({isDateValid: false}))
        .then(() => {
          window.every = every;
          window.values = values;
          window.state = this.state;
          return resolve(true)
        })
    });
  }

  onSubmit(event) {
    const {symbol, price, quantity, date} = this.inputs;

    // Only if all values are valid then add a new item
    this.validate()
      .then(() => {
        if (every(values(this.state))) {
          this.props.addItem({
            symbol: symbol.value.trim().toUpperCase(),
            price: Number(price.value),
            quantity: Number(quantity.value),
            date: date.value,
          });
          symbol.value = '';
          price.value = '';
          quantity.value = '';
          date.value = '';
        }
      });
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
                 id="symbol"
                 aria-invalid={false}
          />
          <label className="error" htmlFor="text">
            {this.state.isPriceValid ? '' : 'Enter a valid Symbol'}
          </label>

          <input type="number" placeholder="Price"
                 id="price"
                 ref={(price) => this.inputs.price = price}
                 aria-required={true}
                 aria-label="Price"
                 aria-invalid={false}
          />
          <label className="error" htmlFor="price">
            {this.state.isPriceValid ? '' : 'Enter valid Price'}
          </label>

          <input type="number" placeholder="Quantity"
                 id="quantity"
                 ref={(quantity) => this.inputs.quantity = quantity}
                 aria-required={true}
                 aria-label="Quantity"
                 aria-invalid={false}
          />
          <label className="error" htmlFor="quantity">
            {this.state.isQuantityValid ? '' : 'Enter valid Quantity'}
          </label>

          <input type="date"
                 id="date"
                 ref={(date) => this.inputs.date = date}
                 aria-label="Date"
                 aria-required={true}
                 aria-invalid={false}
          />
          <label className="error" htmlFor="date">
            {this.state.isDateValid ? '' : 'Please, select a valid date'}
          </label>
          <input aria-label="Submit"
                 aria-invalid={false}
                 onClick={this.onSubmit}
                 value=" + "
                 type="button"
          />

        </fieldset>
      </form>
    );
  }
}
