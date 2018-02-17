import { generatePluginMenuItemTemplate, addToPluginMenu, buildMenu } from '../MenuManager/util';
import * as menuList from '../MenuManager/config';

export const addMenuOfPlugin = (rawPluginMenu) => (dispatch) => {
  if (rawPluginMenu) {
    const menuItem = generatePluginMenuItemTemplate(rawPluginMenu, dispatch);
    addToPluginMenu(menuItem);
    const menuTemplate = Object.values(menuList);
    buildMenu(menuTemplate);
  }
};
