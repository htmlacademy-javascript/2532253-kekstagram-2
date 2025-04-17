const ID = [
  1,
  2,
  3,
];

const avatar = [
  'img/avatar-6.svg',
];

const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.!',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'
];

const name = [
  'Шерочка',
  'Машерочка',
  'Проверочка'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createPhoto = () => {
  const randomIdIndex = getRandomInteger(0, ID.length - 1);
  const randomAvatarIndex = getRandomInteger(0, avatar.length - 1);

  return {
    ID: `${ID[randomIdIndex] } ${ avatar[randomAvatarIndex]}`,
    message: '',
    name: '',
  };
};
console.log(
  createPhoto()
);
// {
//   id: 135,
//   avatar: 'img/avatar-6.svg',
//   message: 'В целом всё неплохо. Но не всё.',
//   name: 'Артём',
// }
