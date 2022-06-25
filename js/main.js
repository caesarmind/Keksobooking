const generateRandomN = function(min, max) {
  if(min > 0 || min < max) {

    const difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);

    rand = rand + min;

    return rand;

  } else {
    return NaN;
  }
};
// Generate Avatar ID
const getAvatarid = function(number){
  const convertedN = number.toString().padStart(2, '0');
  return `img/avatars/user${convertedN}.png`;
};
// Generate random floating number
const randFloatingNumber = function(min, max){
  const highlightedNumber = (Math.random() * (max - min) + min).toFixed(5);
  return highlightedNumber;
};
// Shuffles Array order
const shuffleArr = function(arr) {
  let arrLength = arr.length;
  while (--arrLength > 0) {
    const randIndex = Math.floor(Math.random() * (arrLength + 1));
    [arr[randIndex], arr[arrLength]] = [arr[arrLength], arr[randIndex]];
  }
  return arr;
};
// Function that generates array by getting exact number of unique elemnts from another array
const getRandArrElement = function(array, elementN) {
  const newArray = array.slice();
  return shuffleArr(newArray).slice(elementN);
};


const RANDOM_OBJECT_NUM= 10;

const TITLES = [
  'COZY APARTMENT IN THE HISTORICAL PART OF TBILISI',
  'House on the river, amazing view from the window',
  'Fantastic view of all over Tbilisi (city center)',
  'Entire guesthouse hosted',
];
const DESCRIPTIONS = [
  'Sunny and cozy apartment in historic part of Tbilisi',
  'Calm, nice and beautiful place of Samegrelo',
  'Studio typed rooms for workign environment'];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const TIMES = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'elevator',
  'conditioner',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const createOffer = () => {
  const randomTitlesIndex = generateRandomN(0, TITLES.length - 1);
  const randomDescriptionIndex = generateRandomN(0, TITLES.length - 1);
  const randomTypesIndex = generateRandomN(0, TITLES.length - 1);
  const randomTimesIndex = generateRandomN(0, TITLES.length - 1);
  const randomFeaturesIndex = generateRandomN(1, TITLES.length - 1);
  const randomPhotosIndex = generateRandomN(1, TITLES.length - 1);

  return {
    author: {
      avatar: getAvatarid(generateRandomN(0, 10)),
    },
    offer: {
      title: TITLES[randomTitlesIndex],
      address: ['location.lng', 'location.lat'],
      price: generateRandomN(0, 10000),
      type: TYPES[randomTypesIndex],
      rooms: generateRandomN(0, 5),
      guests: generateRandomN(0, 5),
      checkin: TIMES[randomTimesIndex],
      checkout: TIMES[randomTimesIndex],
      features: getRandArrElement(FEATURES, randomFeaturesIndex),
      description: DESCRIPTIONS[randomDescriptionIndex],
      photos: getRandArrElement(PHOTOS, randomPhotosIndex),
    },
    location: {
      lat: randFloatingNumber(35.65000, 35.70000),
      lng: randFloatingNumber(139.70000, 139.80000),
    },
  };
};

const randomObjects = Array.from({length:RANDOM_OBJECT_NUM}, createOffer);
generateRandomN();


