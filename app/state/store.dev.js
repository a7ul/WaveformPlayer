import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import rootReducer from './reducers/root.reducer';
import {reduxRouterMiddleware} from '../routes/router';
import {composeWithDevTools} from 'remote-redux-devtools';

const enhancerList = [];

const composeAlongWithDevTools = composeWithDevTools({hostname: 'localhost', realtime: true, port: 9000});

const enhancer = composeAlongWithDevTools(applyMiddleware(thunk, promise, reduxRouterMiddleware), ...enhancerList);

export default (initialState = {}) => createStore(rootReducer, initialState, enhancer);
