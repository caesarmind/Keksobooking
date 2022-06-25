// Generate Random Number in range
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

export {generateRandomN, randFloatingNumber, getRandArrElement};
