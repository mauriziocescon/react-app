import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import { createBrowserHistory } from 'history';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const saga = createSagaMiddleware();
export const history = createBrowserHistory();

const configureStore = (preloadedState: any) => {
  // define middlewares
  const middleware = [thunk, saga, routerMiddleware(history), createLogger()];

  // compose lets you apply several store enhancers in a row
  // @ts-ignore
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer(history),
    preloadedState,
    composeEnhancers(
      applyMiddleware(...middleware),
    ),
  );

  saga.run(rootSaga);

  return store;
};

export default configureStore;
