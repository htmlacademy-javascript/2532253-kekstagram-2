import { Filters, RANDOM_FACTOR } from './constants.js';
import {renderCards} from './thumbnails.js';
import { debounce } from './util.js';

const filtersTag = document.querySelector('.img-filters');
const filterFormTag = document.querySelector('.img-filters__form');

let localPhotos;

const debouncedRanderCards = debounce(renderCards);

export const initFilters = (pictures) => {
  localPhotos = [...pictures];
  filtersTag.classList.remove('img-filters--inactive');
};

const setActiveButton = (activeButton) => {
  document.querySelector('.img-filters__button--active').classList.remove('.img-filters__button--active');
  activeButton.classList.add('.img-filters__button--active');
};

const filterAction = {
  [Filters.DEFAULT]: () => localPhotos,
  [Filters.DISCUSSED]: () => [...localPhotos].sort((a,b) =>
    b.comments.length - a.comments.length),
  [Filters.RANDOM]: () => [...localPhotos].sort (() => Math.random() - RANDOM_FACTOR).slice(0,10)
};

filterFormTag.addEventListener('click', ({target}) => {
  const button = target.closest('.img-filters__button');
  if (button){
    setActiveButton(button);

    debouncedRanderCards(filterAction[button.id]());
  }
});
