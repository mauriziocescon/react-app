import { routerReducer as routing } from "react-router-redux";
import { intlReducer } from "react-intl-redux";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  routing,
  intl: intlReducer,
});

export default rootReducer;
