import './util.js';
import './data.js';


// const PHOTOS_COUNT = 25;
// const MIN_LIKES = 15;
// const MAX_LIKES = 200;
// const MIN_COMMENTS = 0;
// const MAX_COMMENTS = 30;
// const MAX_COMMENTS_ID = 10000;
// const MIN_COMMENTS_ID = 100;
// const MIN_AVATAR = 1;
// const MAX_AVATAR = 6;
// const MESSAGES = [
//   'Всё отлично!',
//   'В целом всё неплохо. Но не всё.!',
//   'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'
// ];

// const NAMES = [
//   'Шерочка',
//   'Машерочка',
//   'Проверочка'
// ];

// const DESCRIPTIONS = [
//   'Пляж',
//   'Клубника',
//   'Концерт'
// ];

// const getRandomInteger = (a, b) => {
//   const lower = Math.ceil(Math.min(a, b));
//   const upper = Math.floor(Math.max(a, b));
//   const result = Math.random() * (upper - lower + 1) + lower;
//   return Math.floor(result);
// };

// const getComments = () => {
//   const countComments = getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);
//   const comments = [];

//   for(let i = 1; i <= countComments; i++){
//     comments.push({
//       id: getRandomInteger(MIN_COMMENTS_ID, MAX_COMMENTS_ID),
//       avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
//       message: MESSAGES[getRandomInteger(0,MESSAGES.length - 1)],
//       names: NAMES [getRandomInteger(0, NAMES.length - 1)]
//     });
//   }
//   return comments;
// };

// const createPhoto = (index) => ({
//   id: index,
//   url: `./photos/${index}.jpg`,
//   likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
//   description: DESCRIPTIONS [getRandomInteger(0, DESCRIPTIONS.length - 1)],
//   comments: getComments()
// });


// const createPhotos = () => {

//   const photos = [];

//   for (let i = 1; i <= PHOTOS_COUNT; i++) {
//     photos.push(createPhoto(i));
//   }
//   return photos;
// };


// console.log(createPhotos());
