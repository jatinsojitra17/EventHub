import * as usersService from "./users-service.js";

const BASE_URL = '/api/users';

export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

/*--- Helper Functions ---*/

async function sendRequest(url, method = 'GET', payload = null) {
  // Fetch uses an options object as a second arg to make requests other than basic GET requests, include data, headers, etc.
  const options = { method };
  
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    // Fetch requires data payloads to be stringified and assigned to a body property on the options object
    options.body = JSON.stringify(payload);
  }

  // If there's a valid token in local storage, include it with the AJAX request in the header
  const token = usersService.getToken();
  if (token) {
    // Ensure the headers object exists
    options.headers = options.headers || {};
    // Add token to an Authorization header (prefacing with 'Bearer' is recommended in the HTTP specification)
    options.headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, options);

  // res.ok will be false if the status code is set to 4xx in the controller action
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Invalid Login');
  }
}