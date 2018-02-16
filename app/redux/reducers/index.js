import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as controller } from '../../features/Controller/redux';
import { reducer as pluginLoader } from '../../features/PluginLoader/redux';
import { reducer as sideMenu } from '../../features/SideBar/redux';
import { reducer as centerStage } from '../../features/CenterStage/redux';

export const rootReducerMap = {
  controller,
  pluginLoader,
  sideMenu,
  router,
  centerStage
};

export default combineReducers(rootReducerMap);
