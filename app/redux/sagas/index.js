import { fork } from 'redux-saga/effects';
import startupSaga from './startup';

export default function* () {
  yield fork(startupSaga);
}
