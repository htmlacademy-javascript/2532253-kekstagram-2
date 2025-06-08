export const RANDOM_FACTOR = 0.5;

export const Filters = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

export const GET_RECIPIENT = 'https://31.javascript.htmlacademy.pro/kekstagram/data';
export const POST_RECIPIENT = 'https://31.javascript.htmlacademy.pro/kekstagram/';

export const SendButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

export const Popups = {
  SUCCESS: 'success',
  ERROR: 'error'
};
export const SCALE_FACTOR = 0.01;
export const DELAY = 5000;
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
export const COMMENT_STEP = 5;
