import {combineReducers} from 'redux';
import {routerReducer as router} from 'react-router-redux';
import {reducer as controller} from '../features/Controller/redux';

export default combineReducers({
  controller,
  router
});
