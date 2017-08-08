import { call, put, takeLatest } from "redux-saga/effects";
import { fetchUsersUrl } from "../constants";
import { FETCH_USERS_REQUESTED, receiveUsers, usersFailure } from "../actions";

export function* fetchUsers(action) {
  try {
    const data = yield call(fetch, fetchUsersUrl);
    yield put(receiveUsers(data));
  } catch (error) {
    yield put(usersFailure(error));
  }
}

export function* watchFetchData() {
  yield takeLatest(FETCH_USERS_REQUESTED, fetchUsers);
}
