import {getProfit} from '../services/profitService';

export const GET_PROFIT_ACTION = 'GET_PROFIT';
export const GET_PORTFOLIO_PROFIT_ACTION = 'GET_PORTFOLIO_PROFIT';

export const getPortfolioProfit = () => {
  return (dispatch, getState) => {
    getProfit(getState().portfolio)
      .then((profit) => dispatch({
        type: GET_PROFIT_ACTION,
        payload: profit
      }));
  }
};

export default (state = {}, action) => {
  switch (action.type) {
    case GET_PROFIT_ACTION:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
