import { DELAY } from './constants.js';

const errorAlertTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const body = document.body;

export const showErrorAlert = () => {
  const errorAlert = errorAlertTemplate.cloneNode(true);
  body.append(errorAlert);
  setTimeout(() => {
    errorAlert.remove();
  }, DELAY);
};

export const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
