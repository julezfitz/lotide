const eqArrays = require('./eqArrays.js');
const eqObjects = require('./eqObjects.js');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const object1 = { a: '1', b: 2 };
const object2 = { b: 2, a: '1' };
const object3 = { a: '1', b: 2, c: 43};

assertObjectsEqual(object1, object2);
assertObjectsEqual(object1, object3);

module.exports = assertObjectsEqual;
