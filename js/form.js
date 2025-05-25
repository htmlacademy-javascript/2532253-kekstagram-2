import { isValid } from './validation.js';

const formTag = document.querySelector('.img-upload__form');
const uploadFileTag = document.querySelector('#upload-file');
const uploadModalTag = document.querySelector('.img-upload__overlay');
const closeButtonTag = document.querySelector('#upload-cancel');
const imageTag = document.querySelector('.img-upload__preview img');

const body = document.body;

const showForm = (isShow = true) => {
  if (isShow){
    uploadModalTag.classList.remove('hidden');
    body.classList.add('modal-open');
  } else {
    uploadModalTag.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

uploadFileTag.addEventListener('change', () => {
  const fileImage = uploadFileTag.files[0];
  const imageURL = URL.createObjectURL(fileImage);
  imageTag.src = imageURL;
  showForm();

});

closeButtonTag.addEventListener('click', () => {
  showForm(false);
});

formTag.addEventListener('submit', () => {

});

