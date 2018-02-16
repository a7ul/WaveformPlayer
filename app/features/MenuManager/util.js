import { remote } from 'electron';
import { pluginMenu } from './config';

const { Menu } = remote;

export const generatePluginMenuItemTemplate = (pluginMenuConfig = {}, callAction) => {
  const { action, submenu } = pluginMenuConfig;
  const click = action ? () => callAction(action) : pluginMenuConfig.click;
  const generatedSubmenu = Array.isArray(submenu) ? submenu.map((subItem) => generatePluginMenuItemTemplate(subItem, callAction)) : null;
  return { ...pluginMenuConfig, submenu: generatedSubmenu, click };
};

export const addToPluginMenu = (pluginMenuTemplate) => {
  pluginMenu.submenu.push(pluginMenuTemplate);
  return pluginMenu;
};

export const buildMenu = (menuTemplate) => {
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
};

