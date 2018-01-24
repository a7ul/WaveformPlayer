import {combineReducers} from 'redux';
import {routerReducer as router} from 'react-router-redux';
import {reducer as controller} from '../features/Controller/redux';
import {reducer as pluginManager} from '../features/PluginManager/redux';

export default combineReducers({
  controller,
  pluginManager,
  router
});
