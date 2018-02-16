import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';
import rootSaga from './sagas';

export const sagaMiddleware = createSagaMiddleware();
export const routeHistory = createHistory();

const enhancerList = [];
if (process.env.NODE_ENV !== 'production') {
  window.__REDUX_DEVTOOLS_EXTENSION__ && enhancerList.push(window.__REDUX_DEVTOOLS_EXTENSION__()); //eslint-disable-line
}
const enhancer = compose(applyMiddleware(thunk, sagaMiddleware, routerMiddleware(routeHistory)), ...enhancerList);

const initStore = (initialState = {}) => {
  const store = createStore(rootReducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};

export const store = initStore({});

