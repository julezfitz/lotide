const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

//Test assertions
let testString = "hello";

describe("#letterPositions", () => {
  it("returns [1] for e", () => {
    assert.deepEqual(letterPositions(testString).e, [1]);
  });
  it("returns [0] for h", () => {
    assert.deepEqual(letterPositions(testString).h, [0]);
  });
  it("returns [2,3] for l", () => {
    assert.deepEqual(letterPositions(testString).l, [2,3]);
  });
  it("returns [4] for o", () => {
    assert.deepEqual(letterPositions(testString).o, [4]);
  });
});