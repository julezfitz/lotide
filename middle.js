
const middle = function(array) {
  const midIndex = array.length / 2;
  let midArray = [];
  if (array.length >= 2 && array.length % 2 !== 0) {
    midArray.push(array[midIndex - 0.5]);
  } else if (array.length >= 2 && array.length % 2 === 0) {
    midArray.push(array[midIndex - 1]);
    midArray.push(array[midIndex]);
  }
  return midArray;
};

module.exports = middle;
