import { put } from 'redux-saga/effects';
import { loadAllPlugins } from '../../features/PluginLoader/thunk';

export default function* startupSaga() {
  // load plugins
  yield put(loadAllPlugins());
}
