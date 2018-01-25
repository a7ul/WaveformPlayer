import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as controller } from '../features/Controller/redux';
import { reducer as plugins } from '../features/PluginLoader/redux';

export default combineReducers({
  controller,
  plugins,
  router
});
