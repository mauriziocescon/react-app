import { delay } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUsers } from '../apis';
import { FETCH_USERS_REQUESTED, receiveUsers, usersFailure } from '../actions';

export function* fetchData(action) {
  try {
    yield delay(1000);
    const data = yield call(fetchUsers, action.userTextSearch);
    yield put(receiveUsers(data));
  } catch (error) {
    yield put(usersFailure(error));
  }
}

export function* watchFetchData() {
  yield takeLatest(FETCH_USERS_REQUESTED, fetchData);
}
