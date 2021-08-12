const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

//Test assertions
let testString = "hello";

describe("#letterPositions", () => {
  it("returns [1] for e in 'hello'", () => {
    assert.deepEqual(letterPositions(testString).e, [1]);
  });
  it("returns [0] for h in 'hello'", () => {
    assert.deepEqual(letterPositions(testString).h, [0]);
  });
  it("returns [2,3] for l in 'hello'", () => {
    assert.deepEqual(letterPositions(testString).l, [2,3]);
  });
  it("returns [4] for o in 'hello'", () => {
    assert.deepEqual(letterPositions(testString).o, [4]);
  });
});