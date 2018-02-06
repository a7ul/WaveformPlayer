import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import { reduxRouterMiddleware } from '../router';

export const sagaMiddleware = createSagaMiddleware();

const enhancerList = [];

if (process.env.NODE_ENV !== 'production') {
  window.__REDUX_DEVTOOLS_EXTENSION__ && enhancerList.push(window.__REDUX_DEVTOOLS_EXTENSION__()); //eslint-disable-line
}

const enhancer = compose(applyMiddleware(thunk, sagaMiddleware, reduxRouterMiddleware), ...enhancerList);

export const initStore = (initialState = {}) => createStore(rootReducer, initialState, enhancer);
