const eqArrays = require('./eqArrays.js');
const assertArraysEqual = require('./assertArraysEqual.js');

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

//Test assertions
let testString = "hello";
console.log(letterPositions(testString));
assertArraysEqual(letterPositions(testString).e, [1]);
assertArraysEqual(letterPositions(testString).h, [0]);
assertArraysEqual(letterPositions(testString).l, [2,3]);
assertArraysEqual(letterPositions(testString).o, [4]);
