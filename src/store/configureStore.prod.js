import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const configureStore = preloadedState => {
  // define middlewares
  const middleware = [thunk];

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
  );

  return store;
};

export default configureStore;
