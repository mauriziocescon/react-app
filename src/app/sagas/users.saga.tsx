import { call, put, takeLatest, delay } from 'redux-saga/effects';

import { FETCH_USERS_REQUESTED, receiveUsers, usersFailure } from '../actions';

import { fetchUsers } from '../apis';

export function* fetchData(action: any) {
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
