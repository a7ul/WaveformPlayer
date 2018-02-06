import path from 'path';
import result from 'lodash/result';
import logger from '../../utils/logger';
import * as actions from './redux';
import { getPluginList } from './util';
import { generatePluginMenuItemTemplate } from '../MenuManager/util';
import { buildMenu } from '../MenuManager/thunk';

export const initPlugin = (rawPlugin) => (dispatch) => {
  try {
    return Promise.resolve(rawPlugin.init())
      .then((plugin) => ({
        ...plugin,
        menuItem: generatePluginMenuItemTemplate(plugin.menuItem, dispatch)
      }));
  } catch (err) {
    return Promise.reject(err);
  }
};

export const loadPlugin = (rawPlugin, dispatch) => {
  const initPromise = dispatch(initPlugin(rawPlugin))
    .then((plugin) => dispatch(actions.addPlugin(plugin)))
    .catch((err) => {
      logger.error(`PLUGINLOAD:${result(rawPlugin, 'name')}`, err);
    });
  return initPromise;
};

export const loadAllPlugins = () => (dispatch) => {
  const pluginDirectory = path.resolve(__dirname, '../../plugins');
  return getPluginList(pluginDirectory)
    .then((plugins) => {
      const pluginLoad = plugins.map((eachPlugin) => loadPlugin(eachPlugin, dispatch));
      return Promise.all(pluginLoad);
    }).then(() => {
      dispatch(buildMenu());
    });
};

