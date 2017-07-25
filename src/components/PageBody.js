import React, {Component} from 'react';
import PortfolioInputs from './PortfolioInputs';
import PortfolioList from './PortfolioList';

export default class PageBody extends Component {
  render () {
    return (
      <div className="PageBody">
        <PortfolioInputs />
        <PortfolioList />
      </div>
    );
  }
}
