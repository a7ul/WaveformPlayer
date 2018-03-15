import { call, takeLatest } from 'redux-saga/effects';
import { DOWNLOAD_GET_META } from './redux/download';
import { getVideoDownloadMetadata } from './util';

function* getDownloadMeta(action) {
  const url = action.payload;
  try {
    const metadata = yield call(getVideoDownloadMetadata, url);
    console.log(metadata);
  } catch (err) {
    console.log(err);
  }
}

function* youtubeMusicSaga() {
  yield takeLatest(DOWNLOAD_GET_META, getDownloadMeta);
}

export default youtubeMusicSaga;
