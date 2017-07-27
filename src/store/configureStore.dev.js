import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import { createLogger } from "redux-logger";
// import api from "../middleware/api";
import rootReducer from "../reducers";

const configureStore = preloadedState => {
  // compose lets you apply several store enhancers in a row
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      // todo: applyMiddleware(thunk, api, createLogger()),
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      const nextRootReducer = require("../reducers").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
