import { v4 } from 'uuid';
import {removeProfitItemAction, getItemProfitAction} from './profitModule';

export const ADD_ITEM_ACTION = 'ADD_ITEM';
export const REMOVE_ITEM_ACTION = 'REMOVE_ITEM';

/**
 * Action creator.
 * Removes both portfolio item and it's profit info.
 *
 * NOTE: Profit is logically separated from the item due it's dynamic nature.
 * Although it would be easier to have them within same store.key. It was decided
 * to use two different store keys and modules.
 *
 * @param id
 * @return {function(*)}
 */
export const removeItemAction = (id) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_ITEM_ACTION,
      payload: id
    });
    dispatch(removeProfitItemAction(id));
  };
};

/**
 * Action creator.
 * Add a new Item to the portfolio
 * @param item
 * @return {function(*)}
 */
export const addItemAction = (item) => {
  return (dispatch) => {
    item = {...item, id: v4(), symbol: item.symbol.toUpperCase()};
    dispatch({
      type: ADD_ITEM_ACTION,
      payload: item
    });
    getItemProfitAction(item)(dispatch);
  };
};

/**
 * Portfolio reducer
 *
 * @param state
 * @param action
 * @return {Object<id<PortfolioItem>>}
 */
export default (state = {}, action) => {
  switch (action.type) {
    case ADD_ITEM_ACTION:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case REMOVE_ITEM_ACTION:
      let newState = {...state};
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
}
