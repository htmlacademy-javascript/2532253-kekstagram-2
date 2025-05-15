
const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

export const renderCards = (pictures) => {
  console.log(pictures)
  const fragment = document.createDocumentFragment();
  pictures.forEach((item) => {
    const thumbnail = template.cloneNode(true);
    const image = thumbnail.querySelector('.picture__img');
    image.src = item.url;
    image.alt = item.description;
    thumbnail.querySelector('.picture__comments').textContent = item.comments.length;
    thumbnail.querySelector('.picture__likes').textContent = item.likes;
    fragment.appendChild(thumbnail);
  });
  container.append(fragment)
};