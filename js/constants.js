export const SCALE_FACTOR = 0.01;
export const Scale = {
  MAX: 100,
  MIN: 25,
  STEP: 25,
  DEFAULT: 100
};
export const Effects = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

export const EffectSettings = {
  [Effects.DEFAULT]:{
    slider: {
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
      start: 100
    },
    style: '',
    units: '',
  },
  [Effects.CHROME]:{
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
      start: 1
    },
    style: 'grayscale',
    units: '',
  },
  [Effects.SEPIA]:{
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
      start: 1
    },
    style: 'sepia',
    units: '',
  },
  [Effects.MARVIN]:{
    slider: {
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
      start: 100
    },
    style: 'invert',
    units: '%',
  },
  [Effects.PHOBOS]:{
    slider: {
      range: {
        min: 0,
        max: 3,
      },
      step: 0.1,
      start: 3
    },
    style: 'blur',
    units: 'px',
  },
  [Effects.HEAT]:{
    slider: {
      range: {
        min: 1,
        max: 3,
      },
      step: 0.1,
      start: 3
    },
    style: 'brightness',
    units: '',
  }
};

export const MAX_DESCRIPTION = 5;
export const HASHTAG_FORMULA = /^#[a-zA-Zа-яА-Я0-9]{1,19}$/;
export const HASHTAGS_MAX = 5;
export const PHOTOS_COUNT = 25;
export const MIN_LIKES = 15;
export const MAX_LIKES = 200;
export const MIN_COMMENTS = 0;
export const MAX_COMMENTS = 30;
export const MAX_COMMENTS_ID = 10000;
export const MIN_COMMENTS_ID = 100;
export const MIN_AVATAR = 1;
export const MAX_AVATAR = 6;
export const COMMENT_STEP = 5;
export const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.!',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'
];

export const NAMES = [
  'Шерочка',
  'Машерочка',
  'Проверочка'
];

export const DESCRIPTIONS = [
  'Пляж',
  'Клубника',
  'Концерт'
];
