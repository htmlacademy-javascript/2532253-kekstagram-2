import {Effects, EffectSettings} from './constants.js';
const inputTag = document.querySelector('.effect-level__value');
const sliderElementTag = document.querySelector('.effect-level__slider');
const effectsContainerTag = document.querySelector('.effects');
const imageTag = document.querySelector('.img-upload__preview img');
const sliderContainerTag = document.querySelector('.effect-level');

let currentEffect = Effects.DEFAULT;

noUiSlider.create(sliderElementTag, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  connect: 'lower',
});
const renderEffect = () => {
  const {style, units} = EffectSettings [currentEffect];
  imageTag.style.filter = currentEffect === Effects.DEFAULT ? '' :
    `${style}(${inputTag.value}${units})`;
};

sliderElementTag.noUiSlider.on('update', () => {
  inputTag.value = sliderElementTag.noUiSlider.get();
  renderEffect();
});

const updateSlider = () => {
  const {slider} = EffectSettings [currentEffect];
  sliderElementTag.noUiSlider.updateOptions({...slider});
};

const showSlider = (isShown = true) => {
  if (isShown) {
    sliderContainerTag.classList.remove('hidden');
  }else {
    sliderContainerTag.classList.add('hidden');
  }
};

const renderSlider = () => {
  updateSlider();
  showSlider(currentEffect !== Effects.DEFAULT);
};

effectsContainerTag.addEventListener('change', ({target}) => {
  currentEffect = target.value;
  renderSlider();
});


export const reset = () => {
  currentEffect = Effects.DEFAULT;
  updateSlider();
  showSlider(currentEffect !== Effects.DEFAULT);
  renderSlider();
};

reset();
