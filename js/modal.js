import {COMMENT_STEP} from './constants.js';
const modalTag = document.querySelector('.big-picture');
const imageTag = modalTag.querySelector('.big-picture__img img');
const closeButton = modalTag.querySelector('#picture-cancel');
const descriptionTag = modalTag.querySelector('.social__caption');
const likesTag = modalTag.querySelector('.likes-count');
const commentsTotalTag = modalTag.querySelector('.social__comment-total-count');
const commentTemplate = modalTag.querySelector('.social__comment');
const commentContainerTag = modalTag.querySelector('.social__comments');
const loaderCommentsTag = modalTag.querySelector('.comments-loader');
const statisticTag = modalTag.querySelector('.social__comment-shown-count');
const body = document.body;

let localComments;
let renderedComments;

const showModal = (isShown = true) => {
  if (isShown) {
    modalTag.classList.remove('hidden');
    body.classList.add('modal-open');
  } else {
    modalTag.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

const renderStatistic = () => {
  statisticTag.textContent = renderedComments;
};

const renderLoader = () => {
  if (localComments.length){
    loaderCommentsTag.classList.remove('hidden');
  }else {
    loaderCommentsTag.classList.add('hidden');
  }

};

const renderComments = () => {
  const fragment = document.createDocumentFragment();
  localComments.splice(0, COMMENT_STEP).forEach(({avatar, message, name}) => {
    const newComment = commentTemplate.cloneNode(true);
    const image = newComment.querySelector('.social__picture');
    image.src = avatar;
    image.alt = name;
    newComment.querySelector('.social__text').textContent = message;
    fragment.append(newComment);
    renderedComments++;
  });
  commentContainerTag.append(fragment);

  renderStatistic();
  renderLoader();
};

const renderModal = ({ url, description, likes, comments }) => {
  imageTag.src = url;
  descriptionTag.textContent = description;
  likesTag.textContent = likes;
  commentsTotalTag.textContent = comments.length;
  localComments = [...comments];
  commentContainerTag.innerHTML = '';
  renderedComments = 0;
  renderComments();
};

export const openModal = (photo) => {
  renderModal(photo);
  showModal();
};

closeButton.addEventListener('click', () => {
  showModal(false);
});

loaderCommentsTag.addEventListener('click', () => {
  renderComments();
});
