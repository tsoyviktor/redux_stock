import {getProfit} from '../services/profitService';
import {values} from 'lodash/object';

export const GET_PROFIT_ACTION = 'GET_PROFIT';
export const GET_PORTFOLIO_PROFIT_ACTION = 'GET_PORTFOLIO_PROFIT';
export const REMOVE_PROFIT_ACTION = 'REMOVE_PROFIT';

/**
 * Action creator.
 * Calculates and returns profit info for all portfolio items
 *
 * @return {function(*, *)}
 */
export const getPortfolioProfit = () => {
  return (dispatch, getState) => {
    const items = values(getState().portfolio);
    getProfit(items)
      .then((profit) => dispatch({
        type: GET_PORTFOLIO_PROFIT_ACTION,
        payload: profit
      }));
  }
};

/**
 * Action creator.
 * Remove Profit item from the store.
 * @param {string} id
 * @return {{type: string, payload: string}}
 */
export const removeProfitItemAction = (id) => {
  return {
    type: REMOVE_PROFIT_ACTION,
    payload: id
  }
};

/**
 * Default Profit reducer
 *
 * @param state
 * @param action
 * @return {{}}
 */
export default (state = {}, action) => {
  switch (action.type) {
    case GET_PORTFOLIO_PROFIT_ACTION:
    case GET_PROFIT_ACTION:
      return {
        ...state,
        ...action.payload
      };
    case REMOVE_PROFIT_ACTION:
      let newSate = {...state};
      delete newSate[action.payload];
      return newSate;
    default:
      return state;
  }
};
