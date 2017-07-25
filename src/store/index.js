import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../modules';
import {readState, writeState} from '../services/localStorage';
import throttle from 'lodash/throttle';

const MAX_WRITE_RATE = 1000;
const initialState = readState();
const enhancers = [];
const middleware = [
  thunk,
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);


store.subscribe(throttle(() => {
  writeState({ portfolio: store.getState().portfolio }), MAX_WRITE_RATE
}));

// TODO : delete this one
global.store = store;

export default store;
