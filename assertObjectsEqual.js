const eqArrays = require('./eqArrays.js');
const eqObjects = require('./eqObjects.js');

// Returns true if both objects have identical keys with identical values.
// const eqObjects = function(object1, object2) {
//   let object1Keys = Object.keys(object1);
//   let object2Keys = Object.keys(object2);
//   if (object1Keys.length === object2Keys.length) {
//     for (const key1 of object1Keys) {
//       if (Array.isArray(object1[key1])) {
//         if (eqArrays(object1[key1], object2[key1]) === false) {
//           return false;
//         }
//       } else {
//         if (object1[key1] !== object2[key1]) {
//           return false;
//         }
//       }
//     }
//     return true;
//   }
//   return false;
// };

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
