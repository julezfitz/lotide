
const middle = function(array) {
  const midIndex = array.length / 2;
  let midArray = [];
  console.log(midIndex);
  if (array.length >= 2 && array.length % 2 !== 0) {
    console.log('large array with uneven number');
    midArray.push(array[midIndex - 0.5]);
  } else if (array.length >= 2 && array.length % 2 === 0) {
    console.log('large array with even number');
    console.log(midIndex - 0.5);
    midArray.push(array[midIndex - 1]);
    midArray.push(array[midIndex]);
  } else {
    console.log('small array');
  }
  return midArray;
};

module.exports = middle;
