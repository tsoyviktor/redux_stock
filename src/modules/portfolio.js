import { v4 } from 'uuid';

export const ADD_ITEM_ACTION = 'ADD_ITEM';
export const REMOVE_ITEM_ACTION = 'REMOVE_ITEM';

export const removeItemAction = (id) => {
  return {
    type: REMOVE_ITEM_ACTION,
    payload: id
  }
};

export const addItemAction = (item) => {
  return {
    type: ADD_ITEM_ACTION,
    payload: {
      id: v4(),
      ...item,
    }
  }
};

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
