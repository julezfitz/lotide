const eqArrays = require('./eqArrays.js');

// Returns true if both objects have identical keys with identical values.
const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if (object1Keys.length === object2Keys.length) {
    for (const key1 of object1Keys) {
      if (Array.isArray(object1[key1])) {
        if (eqArrays(object1[key1], object2[key1]) === false) {
          return false;
        }
      } else if (typeof object1[key1] === 'object' && object1[key1] !== null) {
        if (!eqObjects(object1[key1], object2[key1])) {
          return false;
        }
      } else if (object1[key1] !== object2[key1]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

module.exports = eqObjects;
