import {
  FETCH_USERS_FAILED,
  FETCH_USERS_REQUESTED,
  FETCH_USERS_SUCCEEDED,
} from '../actions';

const userInitialState = {
  isFetching: false,
  userTextSearch: '',
  users: null,
  usersFailureError: null,
};

const users = (state = userInitialState, action: any) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        isFetching: true,
        userTextSearch: action.userTextSearch,
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        ...state,
        isFetching: false,
        users: action.users,
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        isFetching: false,
        users: null,
        usersFailureError: action.usersFailureError,
      };
    default:
      return state;
  }
};

export default users;
