import result from 'lodash/result';
import { setSideMenuItems } from './redux';

export const buildSideMenu = () => (dispatch, getState) => {
  const state = getState();
  const plugins = Object.values(result(state, 'pluginLoader.plugins', {}));
  const sideMenuItemsFromPlugins = plugins.map((eachPlugin) => ({
    ...result(eachPlugin, 'plugin.sideMenuItem', {}),
    pluginId: result(eachPlugin, 'plugin.id')
  }));

  dispatch(setSideMenuItems(sideMenuItemsFromPlugins));
};

