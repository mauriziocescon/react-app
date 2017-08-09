import { FETCH_USERS_REQUESTED, FETCH_USERS_SUCCEEDED, FETCH_USERS_FAILED } from "../actions";

const userInitialState = {
  userTextSearch: "",
  busy: false,
  users: null,
  usersFailureError: null
};

const users = (state = userInitialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        userTextSearch: action.userTextSearch,
        busy: true
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        ...state,
        users: action.users,
        busy: false
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        usersFailureError: action.usersFailureError,
        busy: false
      };
    default:
      return state;
  }
};

export default users;
