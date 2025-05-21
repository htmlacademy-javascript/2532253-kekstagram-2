import { createPhotos } from './data.js';
import { renderCards } from './thumbnails.js';

const photos = createPhotos();
renderCards(photos);
