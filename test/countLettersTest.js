const countLetters = require('../countLetters.js');
const assert = require('chai').assert;

const result1 = countLetters("apple I ate");

describe("#countLetters", () => {
  it("returns 2 for p in 'apple I ate'", () => {
    assert.strictEqual(result1["p"], 2);
  });
  it("returns undefined for z in 'apple I ate'", () => {
    assert.strictEqual(result1["z"], undefined);
  });
  it("returns 2 for a in 'apple I ate'", () => {
    assert.strictEqual(result1["a"], 2);
  });
  it("returns 1 for l in 'apple I ate'", () => {
    assert.strictEqual(result1["l"], 1);
  });
  it("returns undefined for ' ' in 'apple I ate' as it only counts letters", () => {
    assert.strictEqual(result1[" "], undefined);
  });
});