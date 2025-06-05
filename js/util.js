import { DELAY } from './constants.js';

const errorAlertTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const body = document.body;

export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const showErrorAlert = () => {
  const errorAlert = errorAlertTemplate.cloneNode(true);
  body.append(errorAlert);
  setTimeout(() => {
    errorAlert.remove();
  }, DELAY);
};
