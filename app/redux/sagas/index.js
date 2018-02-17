import { fork } from 'redux-saga/effects';
import startupSaga from './startup';
import pluginLoaderSaga from '../../features/PluginLoader/saga';

export default function* () {
  yield fork(pluginLoaderSaga);
  yield fork(startupSaga);
}
