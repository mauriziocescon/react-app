import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import { createBrowserHistory } from 'history';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const saga = createSagaMiddleware();
const history = createBrowserHistory();

const configureStore = (preloadedState: any) => {
  // define middlewares
  const middleware = [thunk, saga, routerMiddleware(history)];

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware),
  );

  saga.run(rootSaga);

  return store;
};

export default configureStore;
