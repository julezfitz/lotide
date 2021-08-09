const eqArrays = require('./eqArrays.js');

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

assertArraysEqual([1,2,3,4],[1,2,3,4]);
assertArraysEqual(["a",2,"c",4],["a",2,"c",4]);


module.exports = assertArraysEqual;