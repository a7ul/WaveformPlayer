import { call, takeLatest } from 'redux-saga/effects';

function* test(action) {
  yield call(console.log, 'REACHED VERSION SAGA', action);
}

function* youtubeMusicSaga() {
  yield takeLatest('CONTROLLER/PLAY_STATUS', test);
}

export default youtubeMusicSaga;
