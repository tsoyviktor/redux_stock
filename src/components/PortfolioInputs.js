import React, {Component} from 'react';

export default class PortfolioInputs extends Component {
  render () {
    return (
      <div>
        <input type="text" placeholder="Symbol"/>
        <input type="text" placeholder="Price"/>
        <input type="number" placeholder="Quantity"/>
        <input type="date" />
      </div>
    );
  }
}