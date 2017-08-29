import { FETCH_USERS_REQUESTED, FETCH_USERS_SUCCEEDED, FETCH_USERS_FAILED } from "../actions";

const userInitialState = {
  userTextSearch: "",
  isFetching: false,
  users: null,
  usersFailureError: null
};

const users = (state = userInitialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        userTextSearch: action.userTextSearch,
        isFetching: true
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        ...state,
        users: action.users,
        isFetching: false
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        usersFailureError: action.usersFailureError,
        isFetching: false
      };
    default:
      return state;
  }
};

export default users;
