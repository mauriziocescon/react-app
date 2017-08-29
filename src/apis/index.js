import { fetchUsersUrl } from "../constants";

export function fetchUsers(textSearch) {
  const options = {
    method: "GET",
    headers: {},
    // body: params,
    // credentials: "omit"
  };

  return fetch(`${fetchUsersUrl}?q=${textSearch || ""}`, options)
    .then(response => {
      return response.status === 200 ? response.json() : Promise.reject("Error");
    })
    .catch(error => Promise.reject(error));
}
