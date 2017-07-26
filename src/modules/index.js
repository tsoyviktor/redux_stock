import {combineReducers} from 'redux';
import portfolio from './portfolioModule';
import profit from './profitModule';

export default combineReducers({
  portfolio,
  profit,
});
