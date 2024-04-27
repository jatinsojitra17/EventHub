import * as usersAPI from './users-api.js';

export async function signUp(userData) {
  // Delegate the network request code to the users-api.js API module which will ultimately return a JSON Web Token (JWT)
  const token = await usersAPI.signUp(userData);

  // Persist the token by storing it in localStorage on the client
  localStorage.setItem('token', token)

  return getUser();
}

export async function login(credentials) {
  const token = await usersAPI.login(credentials);
  localStorage.setItem('token', token)
  return getUser();
}

export function getToken() {
  // getItem returns null if there's no existing property
  const token = localStorage.getItem('token');
  if (!token) return null;

  // Obtain the payload from the token, decode it, and then parse it from a String back into JSON
  const payload = JSON.parse( atob( token.split('.')[1] ) );

  // A JWT's exp property is expressed in seconds, not milliseconds, so we divide by 1000 to convert it
  if (payload.exp < Date.now() / 1000) {
    // Token has expired so we remove it from localStorage and return null
    localStorage.removeItem('token')
    return null;
  } 

  return token;
}

export function getUser() {
  const token = getToken();
  // If there's a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function logOut() {
  localStorage.removeItem('token')
}

export function checkToken() {
  // checkToken() returns a string, but let's make it a Date object for more flexibility
  return usersAPI.checkToken().then(dateStr => new Date(dateStr));
}