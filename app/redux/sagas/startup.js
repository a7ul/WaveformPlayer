import { call, put } from 'redux-saga/effects';
import { loadAllPlugins } from '../../features/PluginLoader/saga';
import { setCenterView } from '../../features/CenterStage/redux';

export default function* startupSaga() {
  // load plugins
  yield call(loadAllPlugins);
  yield put(setCenterView('com_waveform_playlist'));
}
