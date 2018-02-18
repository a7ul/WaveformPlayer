const plugins = {
  /* This is used to hold all the initialised plugins */
};

export const getAllPlugins = () => ({ ...plugins });

export const addPlugin = (id, plugin) => {
  plugins[id] = plugin;
};

export const removePlugin = (pluginId) => {
  delete plugins[pluginId];
};

export const getPlugin = (pluginId) => plugins[pluginId] || null;

