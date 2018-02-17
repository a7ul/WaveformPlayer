import result from 'lodash/result';
import * as pluginsHolder from '../../utils/plugins';

export const getActivePlugin = (activePluginId) => {
  const plugins = pluginsHolder.getPlugins();
  return plugins[activePluginId];
};

export const getActivePluginName = (activePlugin) => result(activePlugin, 'name', 'Unknown Plugin');
