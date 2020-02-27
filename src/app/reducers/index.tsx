import { intlReducer, IntlState } from 'react-intl-redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { combineReducers } from 'redux';

import users from './users.reducer';

export interface IAppState {
  intl: IntlState | undefined;
  router: RouterState;
}

const rootReducer = (history: any) => {
  return combineReducers<any>({
    intl: intlReducer,
    router: connectRouter(history),
    users,
  });
};

export default rootReducer;
