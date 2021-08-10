const eqArrays = require('./eqArrays.js');
const assertArraysEqual = require('./assertArraysEqual.js');

const map = function(array, callBack) {
  const results = [];
  for (let items of array) {
    results.push(callBack(items));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word => word[1]);
console.log(results1);

//Test assertions
assertArraysEqual(results1,['g','c','t','m','t']);
assertArraysEqual(results2,[6,7,2,5,3]);
assertArraysEqual(results3,['r','o','o','a','o']);

module.exports = map;