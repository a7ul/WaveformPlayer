import { call, takeLatest, put } from 'redux-saga/effects';
import { DOWNLOAD_GET_META } from './redux/download';
import { getVideoDownloadMetadata, parseVideoDownloadMetadata } from './util';
import { showModal } from './redux/modal';

function* getDownloadMeta(action) {
  const url = action.payload;
  try {
    const rawMetadata = yield call(getVideoDownloadMetadata, url);
    const videoDownloadMeta = parseVideoDownloadMetadata(rawMetadata);
    yield put(showModal({ videoDownloadMeta }));
  } catch (err) {
    console.log(err);
  }
}

function* youtubeMusicSaga() {
  yield takeLatest(DOWNLOAD_GET_META, getDownloadMeta);
}

export default youtubeMusicSaga;
