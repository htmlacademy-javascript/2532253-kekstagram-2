import { HASHTAG_FORMULA, HASHTAGS_MAX, MAX_DESCRIPTION } from './constants.js';

const formTag = document.querySelector('.img-upload__form');
const descriptionTag = document.querySelector('.text__description');
const hashtagsTag = document.querySelector('.text__hashtags');

const pristine = new Pristine(formTag, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const checkDescription = (value) => value.length <= MAX_DESCRIPTION;

const getHashtags = (text) => text.toLowerCase().split(' ').filter((item) => item.length);

const checkHashtags = (value) => {
  if(!value.length){
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.every((item) => HASHTAG_FORMULA.test(item));
};

const checkCountHashtags = (value) => {
  if(!value.length){
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.length <= HASHTAGS_MAX;
};

const checkUniques = (value) => {
  if(!value.length){
    return true;
  }
  const hashtags = getHashtags(value);
  const uniques = [...new Set(hashtags)];
  return hashtags.length === uniques.length;
};

pristine.addValidator(
  hashtagsTag,
  checkCountHashtags,
  `Много знаков, не больше ${HASHTAGS_MAX}`
);

pristine.addValidator(
  hashtagsTag,
  checkUniques,
  'Не повторяйся!'
);

pristine.addValidator(
  hashtagsTag,
  checkHashtags,
  'Невалидный хештег'
);

pristine.addValidator(
  descriptionTag,
  checkDescription,
  `Пишите, но не больше ${MAX_DESCRIPTION}`
);

export const isValid = () => pristine.validate();
export const reset = () => {
  pristine.reset();
};
