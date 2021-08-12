const countLetters = require('../countLetters.js');
const assert = require('chai').assert;

const result1 = countLetters("apple I ate");

describe("#countLetters", () => {
  it("returns 2 for p", () => {
    assert.strictEqual(result1["p"], 2);
  });
  it("returns undefined for z", () => {
    assert.strictEqual(result1["z"], undefined);
  });
  it("returns 2 for a", () => {
    assert.strictEqual(result1["a"], 2);
  });
  it("returns 1 for l", () => {
    assert.strictEqual(result1["l"], 1);
  });
  it("returns undefined for ' '", () => {
    assert.strictEqual(result1[" "], undefined);
  });
});