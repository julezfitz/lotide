const eqArrays = require('../eqArrays.js');
const assertArraysEqual = require('../assertArraysEqual.js');
const middle = require('../middle.js');


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