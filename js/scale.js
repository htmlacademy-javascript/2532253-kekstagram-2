import { Scale, SCALE_FACTOR } from './constants.js';
const imageTag = document.querySelector('.img-upload__preview img');
const inputTag = document.querySelector('.scale__control--value');
const minusButtonTag = document.querySelector('.scale__control--smaller');
const plusButtonTag = document.querySelector('.scale__control--bigger');

let scale = Scale.MAX;

const render = () => {
  imageTag.style.transform = `scale(${scale * SCALE_FACTOR})`;
  inputTag.value = `${scale}%`;
};

minusButtonTag.addEventListener('click', () => {

  scale = Math.max(scale - Scale.STEP, Scale.MIN);
  render();
});

plusButtonTag.addEventListener('click', () => {
  scale = Math.min(scale + Scale.STEP, Scale.MAX);
  render();
});

export const reset = () => {
  scale = Scale.MAX;
  render();
};

reset();
