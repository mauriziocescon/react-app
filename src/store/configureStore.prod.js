import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const saga = createSagaMiddleware();

const configureStore = preloadedState => {
  // define middlewares
  const middleware = [thunk, saga];

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware),
  );

  saga.run(rootSaga);

  return store;
};

export default configureStore;
