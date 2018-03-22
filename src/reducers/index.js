import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { intlReducer } from 'react-intl-redux';

import users from './users';

const rootReducer = combineReducers({
  users,
  routing,
  intl: intlReducer,
});

export default rootReducer;
