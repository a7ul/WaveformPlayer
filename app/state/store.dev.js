import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import rootReducer from './reducers/root.reducer';
import {reduxRouterMiddleware} from '../routes/router';
import {composeWithDevTools} from 'remote-redux-devtools';
import reduxDevtoolsConfig from '../../helpers/redux-devtools-server.config.json';

const enhancerList = [];

const composeAlongWithDevTools = composeWithDevTools(reduxDevtoolsConfig);

const enhancer = composeAlongWithDevTools(applyMiddleware(thunk, promise, reduxRouterMiddleware), ...enhancerList);

export default (initialState = {}) => createStore(rootReducer, initialState, enhancer);
