import fs from 'fs';
import path from 'path';
import { promisify } from '../../utils/common';
import logger from '../../utils/logger';

const readDir = promisify(fs.readdir);

export const getPluginList = (pluginDir) => {
  const validPlugins = readDir(pluginDir)
    .then(fileNames => fileNames.map((fileName) => {
      const pluginPath = path.resolve(pluginDir, fileName);
      try {
        return require(pluginPath);
      } catch (err) {
        logger.error(err);
        return null;
      }
    }))
    .then(possiblePlugins => possiblePlugins.filter(eachPlugin => !!eachPlugin));
  return validPlugins;
};

export const loadPlugins = (pluginList) => {
  const initialisedPlugins = pluginList.map((eachPlugin) => {
    try {
      return eachPlugin.init();
    } catch (err) {
      logger.error(err);
      return null;
    }
  }).filter(plugin => !!plugin);
  return initialisedPlugins;
};
