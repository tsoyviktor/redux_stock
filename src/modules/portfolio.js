export const ADD_ITEM_ACTION = 'ADD_ITEM';
export const REMOVE_ITEM_ACTION = 'REMOVE_ITEM';

export const removeItemAction = (id) => {
  return {
    type: REMOVE_ITEM_ACTION,
    payload: id
  }
};

export const addItemAction = (item) => {
  return (dispatch) => {
    const newItem = '';
    return dispatch({
      type: ADD_ITEM_ACTION,
      payload: newItem
    });
  }
};

export default (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
