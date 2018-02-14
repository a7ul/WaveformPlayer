
export const generatePluginMenuItemTemplate = (pluginMenuConfig = {}, callAction) => {
  const { action, submenu } = pluginMenuConfig;
  const click = action ? () => callAction(action) : pluginMenuConfig.click;
  const generatedSubmenu = Array.isArray(submenu) ? submenu.map((subItem) => generatePluginMenuItemTemplate(subItem, callAction)) : null;
  return { ...pluginMenuConfig, submenu: generatedSubmenu, click };
};

export const buildMainPluginMenu = (pluginMenuTemplateList) => {
  const pluginMenu = {
    id: 'pluginMenu',
    label: 'Plugins',
    submenu: [...pluginMenuTemplateList]
  };
  return pluginMenu;
};
