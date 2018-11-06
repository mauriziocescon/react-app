import { intlReducer, IntlState } from 'react-intl-redux';
import { routerReducer, RouterState } from 'react-router-redux';
import { combineReducers } from 'redux';

import users from './users.reducer';

export interface IAppState {
  intl: IntlState | undefined;
  router: RouterState;
}

const rootReducer = combineReducers<any>({
  intl: intlReducer,
  router: routerReducer,
  users,
});

export default rootReducer;
