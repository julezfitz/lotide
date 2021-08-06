const eqArrays = require('./eqArrays.js');
const assertArraysEqual = require('./assertArraysEqual.js');

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

//Test Assertions
middle([1,2,3,4,5]);
middle([1,2,3,4]);
middle([1]);

const testArray = [3,4,5,6,7,8,9,10];
const testArray2 = [3];
const testArray3 = [4,5,6,7,8,9,1];

assertArraysEqual(middle(testArray),[6,7]);
assertArraysEqual(middle(testArray2),[]);
assertArraysEqual(middle(testArray3),[7]);
assertArraysEqual(testArray, [3,4,5,6,7,8,9,10]); //Does not modify original array.
