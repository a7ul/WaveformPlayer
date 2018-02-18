import path from 'path';
import { createAction } from 'redux-actions';
import { call, put, takeEvery } from 'redux-saga/effects';
import result from 'lodash/result';
import logger from '../../utils/logger';
import { store, sagaMiddleware } from '../../redux/store';
import { pluginReducers, getRootReducer } from '../../redux/reducers';
import { addToSideMenu } from '../SideMenu/redux';
import { getPluginList } from './util';
import { addSettingsOfPlugin } from '../Settings/redux';
import { addMenuOfPlugin } from './thunk';
import * as pluginsHolder from '../../utils/plugins';

const LOAD_PLUGIN = 'PLUGIN_LOADER/LOAD_PLUGIN';

export const loadPlugin = createAction(LOAD_PLUGIN);

function* addReducerOfPlugin(pluginReducer, pluginId) {
  if (pluginReducer) {
    pluginReducers[pluginId] = pluginReducer;
    const updatedRootReducer = yield call(getRootReducer);
    yield call(store.replaceReducer, updatedRootReducer);
  }
}

function addSagaOfPlugin(pluginSaga) {
  if (pluginSaga) {
    sagaMiddleware.run(pluginSaga);
  }
}

function* addSideMenuOfPlugin(pluginId, sideMenuItem) {
  if (sideMenuItem) {
    yield put(addToSideMenu({ pluginId }));
  }
}

function* pluginLoader(action) {
  const rawPlugin = action.payload;
  try {
    const plugin = yield call(rawPlugin.init);
    yield put(addSettingsOfPlugin({ pluginId: plugin.id, settings: plugin.settings }));
    yield call(pluginsHolder.addPlugin, plugin.id, plugin);
    yield call(addReducerOfPlugin, plugin.reducer, plugin.id);
    yield call(addSagaOfPlugin, plugin.saga);
    yield put(addMenuOfPlugin(plugin.menuItem)); // This is a thunk
    yield call(addSideMenuOfPlugin, plugin.id, plugin.sideMenuItem);
  } catch (err) {
    logger.error(`PLUGINLOAD:${result(rawPlugin, 'name')}`, err);
  }
}

export function* loadAllPlugins() {
  const pluginDirectory = path.resolve(__dirname, '../../plugins');
  const pluginList = yield call(getPluginList, pluginDirectory);
  for (let i = 0; i < pluginList.length; i += 1) {
    yield call(pluginLoader, { payload: pluginList[i] });
  }
}

export default function* pluginLoaderSaga() {
  yield takeEvery(LOAD_PLUGIN, pluginLoader);
}
