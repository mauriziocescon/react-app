import { USER_TEXT_SEARCH } from "../actions";

const userInitialState = {
  userTextSearch: ""
};

const users = (state = userInitialState, action) => {
  switch (action.type) {
    case USER_TEXT_SEARCH:
      return {
        ...state,
        userTextSearch: action.userTextSearch
      };
    default:
      return state;
  }
};

export default users;
