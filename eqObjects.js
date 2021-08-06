const eqArrays = require('./eqArrays.js');
const assertEqual = require('./assertEqual.js');

// Returns true if both objects have identical keys with identical values.
const eqObjects = function (object1, object2) {
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

//Test assertions

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, ba); // => true
// eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);

const obj1 = { a: { z: 1 }, b: 2 };
const obj2 = { a: { z: 1 }, b: 2 };

const obj3 = { a: { y: 0, z: 1 }, b: 2 };
const obj4 = { a: { z: 1 }, b: 2 };

const obj5 = { a: { y: 0, z: 1 }, b: 2 };
const obj6 = { a: 1, b: 2 };

const obj7 = { test: { a: 10, b: { x: 5 } } };
const obj8 = { test: { a: 10, b: { x: 5 } } };

const obj9 = { test: { a: 10 }, c: 7 };
const obj10 = { test: { a: 10 }, c: 7 };


assertEqual(eqObjects(obj1, obj2), true);
assertEqual(eqObjects(obj3, obj4), false);
assertEqual(eqObjects(obj5, obj6), false);
assertEqual(eqObjects(obj7, obj8), true);
assertEqual(eqObjects(obj9, obj10), true);

const object1 = { a: '1', b: 2 };
const object3 = { a: '1', b: 2, c: 43};
assertEqual(eqObjects(object1, object3), false);

module.exports = eqObjects;
