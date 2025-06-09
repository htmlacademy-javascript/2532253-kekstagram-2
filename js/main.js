import { renderCards } from './thumbnails.js';
import './form.js';
import { showErrorAlert } from './util.js';
import { getData } from './api.js';
import { getFilters } from './filters.js';

getData()
  .then((photos) => {
    renderCards(photos);
    getFilters(photos);
  })
  .catch(() => {
    showErrorAlert();
  });
