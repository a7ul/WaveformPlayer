import fs from 'fs';
import path from 'path';
import { promisify } from '../../utils/common';
import logger from '../../utils/logger';

const readDir = promisify(fs.readdir);

export const getPluginList = async (pluginDir) => {
  const fileNames = await readDir(pluginDir);
  const possiblePlugins = [];
  fileNames.forEach((fileName) => {
    const pluginPath = path.resolve(pluginDir, fileName);
    try {
      return possiblePlugins.push(require(pluginPath));
    } catch (err) {
      return logger.error(err);
    }
  });
  return possiblePlugins;
};
