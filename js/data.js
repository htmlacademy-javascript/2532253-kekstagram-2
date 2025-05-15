import {getRandomInteger, getComments, createPhoto} from './util.js';

const PHOTOS_COUNT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MAX_COMMENTS_ID = 10000;
const MIN_COMMENTS_ID = 100;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.!',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'
];

const NAMES = [
  'Шерочка',
  'Машерочка',
  'Проверочка'
];

const DESCRIPTIONS = [
  'Пляж',
  'Клубника',
  'Концерт'
];

export {createPhoto};
