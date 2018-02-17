import fs from 'fs';
import path from 'path';
import { promisify } from '../../utils/common';
import logger from '../../utils/logger';

const readDir = promisify(fs.readdir);

export const getPluginList = async (pluginDir) => {
  const fileNames = await readDir(pluginDir);
  const possibleOnes = fileNames.map((fileName) => {
    const pluginPath = path.resolve(pluginDir, fileName);
    try {
      return require(pluginPath);
    } catch (err) {
      logger.error(err);
      return null;
    }
  });
  return possibleOnes.filter((eachPlugin) => !!eachPlugin);
};
