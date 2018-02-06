import result from 'lodash/result';
import { remote } from 'electron';
import { appMenu, viewMenu, windowMenu, helpMenu } from './config';
import { buildMainPluginMenu } from './util';

const { Menu } = remote;

export const buildMenu = () => (dispatch, getState) => {
  const state = getState();
  const plugins = Object.values(result(state, 'pluginLoader.plugins', {}));
  const menuItemsFromPlugins = plugins.map((eachPlugin) => eachPlugin.plugin.menuItem);
  const pluginMenu = buildMainPluginMenu(menuItemsFromPlugins);

  const menuTemplate = [appMenu, viewMenu, windowMenu, helpMenu, pluginMenu];
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
};
