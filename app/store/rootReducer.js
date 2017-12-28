import {combineReducers} from 'redux';
import {routerReducer as router} from 'react-router-redux';
import {reducer as controller} from '../features/Controller/redux';
import {reducer as version} from '../features/Version/redux';

export default combineReducers({
  controller,
  version,
  router
});
