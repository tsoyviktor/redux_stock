import React, {Component} from 'react';
import PortfolioItem from './PortfolioItem';

export default class PortfolioList extends Component {
  render () {
    return (
      <div className="PortfolioList">
        <PortfolioItem/>
        <PortfolioItem/>
        <PortfolioItem/>
      </div>
    );
  }
}