import path from 'path';
import logger from '../../utils/logger';
import { getPluginList, initPlugins } from './util';

export const findSoftwareVersion = () => (dispatch) => {
  const pluginDirectory = path.resolve(__dirname, '../../plugins');
  getPluginList(pluginDirectory)
    .then((plugins) => initPlugins(plugins))
    .then((initialisedPlugins) => {

    })
    .catch((err) => logger.error(err));
};
