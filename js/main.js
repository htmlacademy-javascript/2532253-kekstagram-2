// import { createPhotos } from './data.js';
import { renderCards } from './thumbnails.js';
import './form.js';
import { showErrorAlert } from './util.js';
import { getData } from './api.js';

getData()
  .then((photos) => {
    renderCards(photos);
  })
  .catch(() => {
    showErrorAlert();
  });
