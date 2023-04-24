import { all, fork } from 'redux-saga/effects';
import { userWatcher } from './user/userSaga';

function* rootSaga() {
  yield all([fork(userWatcher)]);
}

export default rootSaga;
