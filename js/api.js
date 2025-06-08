import { GET_RECIPIENT, POST_RECIPIENT } from './constants.js';

export const getData = () =>
  fetch(GET_RECIPIENT)
    .then((response) => {
      if (!response.ok) {
        throw new Error ();
      }
      return response.json();
    });

export const sendData = (body) => fetch(POST_RECIPIENT, {
  method: 'POST',
  body
});
