import React, {Component} from 'react';
import PortfolioInputs from '../containers/AddNewItem';
import PortfolioList from '../containers/PortfolioList';

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
