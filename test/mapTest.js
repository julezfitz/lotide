const map = require('../map');
const assert = require('chai').assert;

const words = ["ground", "control", "to", "major", "tom"];

//Test assertions

describe("#map", () => {
  it("returns ['g','c','t','m','t'] for [0] in ['ground', 'control', 'to', 'major', 'tom']", () => {
    assert.deepEqual(map(words, word => word[0]), ['g','c','t','m','t']);
  });
  it("returns [6,7,2,5,3] for word.length in ['ground', 'control', 'to', 'major', 'tom']", () => {
    assert.deepEqual(map(words, word => word.length), [6,7,2,5,3]);
  });
  it("returns ['r','o','o','a','o'] for [1] in ['ground', 'control', 'to', 'major', 'tom']", () => {
    assert.deepEqual(map(words, word => word[1]), ['r','o','o','a','o']);
  });
});
