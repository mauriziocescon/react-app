import { FETCH_USERS_REQUESTED, FETCH_USERS_SUCCEEDED, FETCH_USERS_FAILED } from "../actions";

const userInitialState = {
  userTextSearch: ""
};

const users = (state = userInitialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        userTextSearch: action.userTextSearch
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        ...state,
        users: action.users
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        usersFailureError: action.usersFailureError
      };
    default:
      return state;
  }
};

export default users;
