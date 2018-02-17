import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as controller } from '../../features/Controller/redux';
import { reducer as pluginLoader } from '../../features/PluginLoader/redux';
import { reducer as sideMenu } from '../../features/SideBar/redux';
import { reducer as centerStage } from '../../features/CenterStage/redux';

export const pluginReducers = {
  /* This will be dynamically filled up when loading plugins */
  dummy: () => null
};

export const reducerMap = {
  controller,
  pluginLoader,
  sideMenu,
  router,
  centerStage,
  get plugins() {
    return combineReducers(pluginReducers);
  }
};

export const getRootReducer = () => combineReducers(reducerMap);
