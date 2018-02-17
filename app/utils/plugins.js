const plugins = {
  /* This is used to hold all the initialised plugins */
};

export const getPlugins = () => (plugins);

export const addPlugin = (id, plugin) => {
  plugins[id] = plugin;
};

export const removePlugin = (pluginId) => {
  delete plugins[pluginId];
};

