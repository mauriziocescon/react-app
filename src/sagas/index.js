import { call, put, takeLatest, all } from "redux-saga/effects";
import { fetchUsersUrl } from "../constants";

// todo: implement reducers / actions for saga below

export function* fetchUsers(action) {
  try {
    const data = yield call(fetchUsersUrl, action.payload.url);
    yield put({type: "FETCH_USERS_SUCCEEDED", data});
  } catch (error) {
    yield put({type: "FETCH_USERS_FAILED", error});
  }
}

function* watchFetchData() {
  yield takeLatest("FETCH_USERS_REQUESTED", fetchUsers);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchFetchData()
  ]);
}
