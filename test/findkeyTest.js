const findKey = require('../findkey.js');
const assert = require('chai').assert;

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

describe("#findkey", () => {
  it("returns 'noma' for object 1, stars 2", () => {
    assert.strictEqual(findKey(object1, x => x.stars === 2), 'noma');
  });
  it("returns 'Akaleri' for object 1, stars 3", () => {
    assert.strictEqual(findKey(object1, x => x.stars === 3), 'Akaleri');
  });
  it("returns 'ostrich' for object 2, legs 2", () => {
    assert.strictEqual(findKey(object2, x => x.legs === 2), 'ostrich');
  });
});