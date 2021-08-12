const map = require('../map');
const assert = require('chai').assert;

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word => word[1]);
console.log(results1);

//Test assertions

describe("#map", () => {
  it("returns ['g','c','t','m','t'] for word [0]", () => {
    assert.deepEqual(map(words, word => word[0]), ['g','c','t','m','t']);
  });
  it("returns [6,7,2,5,3] for word.length", () => {
    assert.deepEqual(map(words, word => word.length), [6,7,2,5,3]);
  });
  it("returns ['r','o','o','a','o'] for word [1]", () => {
    assert.deepEqual(map(words, word => word[1]), ['r','o','o','a','o']);
  });
});
