import { remote } from 'electron';
import { pluginMenu } from './config';
import { noop } from '../../utils/common';

const { Menu } = remote;

export const generatePluginMenuItemTemplate = (pluginMenuConfig = {}, callAction) => {
  const { action, submenu } = pluginMenuConfig;
  const actionHandler = () => callAction(action);
  const onClick = pluginMenuConfig.click || (action ? actionHandler : noop);
  const generatedSubmenu = Array.isArray(submenu) ? submenu.map((subItem) => generatePluginMenuItemTemplate(subItem, callAction)) : null;
  return { ...pluginMenuConfig, submenu: generatedSubmenu, click: onClick };
};

export const addToPluginMenu = (pluginMenuTemplate) => {
  pluginMenu.submenu.push(pluginMenuTemplate);
  return pluginMenu;
};

export const buildMenu = (menuTemplate) => {
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
};

