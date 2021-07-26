const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns the first key with a truthy value
const findKey = function (object, callback) {
  for (let keys in object) {
    if (callback(object[keys]) === true) {
      return keys;
    }
  }
};

let object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

let object2 = {
  elephant: {
    legs: 4,
    ears: 2
  },
  tiger: {
    legs: 4,
    ears: 2
  },
  ostrich: {
    legs: 2,
    ears: 2
  }
};

//Test assertions
assertEqual(findKey(object1, x => x.stars === 2), 'noma');
assertEqual(findKey(object1, x => x.stars === 3), 'Akaleri');
assertEqual(findKey(object2, x => x.legs === 2), 'ostrich');
