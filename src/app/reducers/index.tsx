import { intlReducer } from 'react-intl-redux';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import users from './users.reducer';

const rootReducer = combineReducers({
  intl: intlReducer,
  router: routerReducer,
  users,
});

export default rootReducer;
