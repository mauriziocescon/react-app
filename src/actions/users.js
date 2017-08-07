export const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
export const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
export const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

export const requestUsers = (textSearch) => {
  return {
    type: FETCH_USERS_REQUESTED,
    userTextSearch: textSearch
  };
};

export const receiveUsers = (data) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    users: data
  };
};

export const usersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    usersFailureError: error
  };
};
