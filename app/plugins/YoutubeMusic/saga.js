import { call, takeLatest } from 'redux-saga/effects';
import { DOWNLOAD_GET_META } from './redux/download';

function* getDownloadMeta(action) {
  yield call(console.log, 'REACHED DOWNLOADMETA', action);
}

function* youtubeMusicSaga() {
  yield takeLatest(DOWNLOAD_GET_META, getDownloadMeta);
}

export default youtubeMusicSaga;
