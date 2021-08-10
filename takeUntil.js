const eqArrays = require('./eqArrays.js');
const assertArraysEqual = require('./assertArraysEqual.js');

const takeUntil = function(array, callback) {
  let results = [];
  for (let items of array) {
    if (callback(items) === false) {
      results.push(items);
    } else {
      return results;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//Test assertions
assertArraysEqual(results1,[1,2,5,7,2]);
assertArraysEqual(results2,['I\'ve','been','to','Hollywood']);

module.exports = takeUntil;
