import { call, takeLatest } from 'redux-saga/effects';
import { DOWNLOAD_START } from './redux';

function* downloadVideo(action) {
  yield call(console.log, 'REACHED VERSION SAGA', action);
}

function* youtubeMusicSaga() {
  yield takeLatest(DOWNLOAD_START, downloadVideo);
}

export default youtubeMusicSaga;
