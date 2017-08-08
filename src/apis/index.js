import { fetchUsersUrl } from "../constants";

export function fetchUsers(textSearch) {
  return fetch(fetchUsersUrl + (textSearch ? "?q=" + textSearch : ""))
    .then(response => {
      return response.status === 200 ? response.json() : Promise.reject("Error");
    });
}
