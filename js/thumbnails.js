
import { openModal } from './modal.js';
const template = document.querySelector('#picture').content.querySelector('.picture');
const containerTag = document.querySelector('.pictures');

let localPhotos;

export const renderCards = (pictures) => {
  localPhotos = [...pictures];
  const fragment = document.createDocumentFragment();
  pictures.forEach((item) => {
    const thumbnail = template.cloneNode(true);
    const image = thumbnail.querySelector('.picture__img');
    image.src = item.url;
    image.alt = item.description;
    thumbnail.querySelector('.picture__comments').textContent = item.comments.length;
    thumbnail.querySelector('.picture__likes').textContent = item.likes;
    thumbnail.dataset.id = item.id;

    // thumbnail.addEventListener('click', () => {
    //   openModal(item);
    // });

    fragment.appendChild(thumbnail);
  });
  containerTag.append(fragment);
};

containerTag.addEventListener('click', ({target}) =>{
  const card = target.closest('.picture');
  if(card) {
    const id = Number(card.dataset.id);
    const photo = localPhotos.find((item) => item.id === id);
    openModal(photo);
  }
});
