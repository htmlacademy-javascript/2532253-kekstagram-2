import { DATAKEKS, DATAKEKSPRO } from './constants.js';

export const getData = () =>
  fetch(DATAKEKS)
    .then((response) => {
      if (!response.ok) {
        throw new Error ();
      }
      return response.json();
    });

export const sendData = (body) => fetch(DATAKEKSPRO, {
  method: 'POST',
  body
});
