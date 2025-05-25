import { createPhotos } from './data.js';
import { renderCards } from './thumbnails.js';
import './form.js';

const photos = createPhotos();
renderCards(photos);
