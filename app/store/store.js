import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import {reduxRouterMiddleware} from '../router';

const enhancerList = [];

if (process.env.NODE_ENV !== 'production') {
  window.__REDUX_DEVTOOLS_EXTENSION__ && enhancerList.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const enhancer = compose(applyMiddleware(thunk, reduxRouterMiddleware), ...enhancerList);

export const initStore = (initialState = {}) => createStore(rootReducer, initialState, enhancer);
