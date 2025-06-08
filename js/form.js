import { isValid, reset as resetValidation } from './validation.js';
import { reset as resetScale } from './scale.js';
import { reset as resetEffects } from './effects.js';
import { showPopup } from './popup.js';
import { Popups, SendButtonText } from './constants.js';
import { sendData } from './api.js';
import { removeEscapeControl, setEscapeControl } from './escape-control.js';

const formTag = document.querySelector('.img-upload__form');
const uploadFileTag = document.querySelector('#upload-file');
const uploadModalTag = document.querySelector('.img-upload__overlay');
const closeButtonTag = document.querySelector('#upload-cancel');
const imageTag = document.querySelector('.img-upload__preview img');
const sendButton = document.querySelector('.img-upload__submit');
const descriptionTag = document.querySelector('.text__description');
const hashtagsTag = document.querySelector('.text__hashtags');
const radiosPreviewTags = document.querySelectorAll('.effects__preview');

const body = document.body;

const showForm = (isShow = true) => {
  if (isShow) {
    uploadModalTag.classList.remove('hidden');
    body.classList.add('modal-open');
  } else {
    uploadModalTag.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

const closeForm = () => {
  formTag.reset();
  resetScale();
  resetValidation();
  resetEffects();
  showForm(false);
};

const canCloseForm = () => !(document.activeElement === hashtagsTag || document.activeElement === descriptionTag);

uploadFileTag.addEventListener('change', () => {
  const fileImage = uploadFileTag.files[0];
  const imageURL = URL.createObjectURL(fileImage);
  imageTag.src = imageURL;
  radiosPreviewTags.forEach((item) => {
    item.style.backgroundImage = `url("${imageURL}")`;
  });

  showForm();
  setEscapeControl(closeForm, canCloseForm);
});

closeButtonTag.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeForm();
  removeEscapeControl();
});

const blockButton = (isBlocked = true) => {
  sendButton.disabled = isBlocked;
  sendButton.textContent = isBlocked ? SendButtonText.SENDING : SendButtonText.IDLE;
};

formTag.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (isValid()) {

    blockButton();
    sendData(new FormData(formTag))
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        closeForm();
        removeEscapeControl();
        showPopup(Popups.SUCCESS);
      })
      .catch(() => {
        showPopup(Popups.ERROR);
      })
      .finally(() => {
        blockButton(false);
      });
  }
});
