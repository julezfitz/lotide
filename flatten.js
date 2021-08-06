const eqArrays = require('./eqArrays.js');
const assertArraysEqual = require('./assertArraysEqual.js');

const flatten = function(input) {
  let newArray = [];
  for (let i = 0; i < input.length; i++) {
    if (Array.isArray(input[i]) === false) {
      newArray.push(input[i]);
    } else {
      for (let j = 0; j < input[i].length; j++) {
        newArray.push(input[i][j]);
      }
    }
  }
  return newArray;
};

//Test assertions
let originalArray = [1, 2, [3, 4], 5, [6]];
console.log(originalArray); // Original array is not changed
assertArraysEqual(flatten(originalArray), [1, 2, 3, 4, 5, 6]);

const newArray = [[34,5],6,5,7,[78,3,2]];
assertArraysEqual(flatten(newArray), [34,5,6,5,7,78,3,2]);
