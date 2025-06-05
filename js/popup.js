import { Popups } from './constants.js';
const body = document.body;

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');

const templates = {
  [Popups.SUCCESS]: successTemplate,
  [Popups.ERROR]: errorTemplate
};

export const showPopup = (type) => {
  const popup = templates[type].cloneNode(true);
  body.append(popup);

  popup.addEventListener('click', ({target}) => {
    if(target.classList.contains(type) || target.classList.contains(`${type}__button`)){
      popup.remove();
    }
  });
};
