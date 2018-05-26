import constants from '../constants';

export function fetchUsers(textSearch: string) {
  const options: RequestInit = {
    headers: {},
    method: 'GET',
    // body: params,
    // credentials: "omit"
  };

  return fetch(`${constants.fetchUsersUrl}?q=${textSearch || ''}`, options)
    .then((response: Response) => {
      return response.status === 200 ? response.json() : Promise.reject('Error');
    })
    .catch((error: any) => Promise.reject(error));
}
