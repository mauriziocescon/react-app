import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const saga = createSagaMiddleware();
const history = createHistory();

const configureStore = (preloadedState: any) => {
  // define middlewares
  const middleware = [thunk, saga, routerMiddleware(history), createLogger()];

  // compose lets you apply several store enhancers in a row
  // tslint:disable-next-line
  // @ts-ignore
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(...middleware),
    ),
  );

  saga.run(rootSaga);

  return store;
};

export default configureStore;
