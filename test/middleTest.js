const middle = require('../middle.js');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [6, 7] for [3,4,5,6,7,8,9,10]", () => {
    assert.deepEqual(middle([3,4,5,6,7,8,9,10]), [6, 7]);
  });
  it("returns [] for [3]", () => {
    assert.deepEqual(middle([3]), []);
  });
  it("returns [7] for [4,5,6,7,8,9,1]", () => {
    assert.deepEqual(middle([4,5,6,7,8,9,1]), [7]);
  });
});