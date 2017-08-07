import { FETCH_USERS_REQUESTED } from "../actions";

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
    default:
      return state;
  }
};

export default users;
