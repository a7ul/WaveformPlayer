import result from 'lodash/result';

export const getActivePluginName = (activePlugin) => result(activePlugin, 'name', 'Unknown Plugin');
