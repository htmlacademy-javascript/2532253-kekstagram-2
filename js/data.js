import {
  MIN_COMMENTS,
  MAX_COMMENTS,
  MIN_COMMENTS_ID,
  MAX_COMMENTS_ID,
  MIN_AVATAR,
  MAX_AVATAR,
  MESSAGES,
  NAMES,
  MIN_LIKES,
  MAX_LIKES,
  DESCRIPTIONS,
  PHOTOS_COUNT
} from './constants.js';
import {getRandomInteger} from './util.js';

const getComments = () => {
  const countComments = getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);
  const comments = [];

  for(let i = 1; i <= countComments; i++){
    comments.push({
      id: getRandomInteger(MIN_COMMENTS_ID, MAX_COMMENTS_ID),
      avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
      message: MESSAGES[getRandomInteger(0,MESSAGES.length - 1)],
      names: NAMES[getRandomInteger(0, NAMES.length - 1)]
    });
  }
  return comments;
};

const createPhoto = (index) => ({
  id: index,
  url: `./photos/${index}.jpg`,
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  comments: getComments()
});


export const createPhotos = () => {

  const photos = [];

  for (let i = 1; i <= PHOTOS_COUNT; i++) {
    photos.push(createPhoto(i));
  }
  return photos;
};
