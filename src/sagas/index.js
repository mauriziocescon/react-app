import { all } from 'redux-saga/effects';
import { watchFetchData } from './users';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchFetchData(),
  ]);
}
