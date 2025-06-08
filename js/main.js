import { renderCards } from './thumbnails.js';
import './form.js';
import { showErrorAlert } from './util.js';
import { getData } from './api.js';
import { initFilters } from './filters.js';

getData()
  .then((photos) => {
    renderCards(photos);
    initFilters(photos);
  })
  .catch(() => {
    showErrorAlert();
  });
