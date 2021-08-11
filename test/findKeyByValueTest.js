const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

const bestTVShowsByGenre = {
  /*eslint-disable */
  sci_fi: "The Expanse",
  /*eslint-enable */
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

//Test assertions

describe("#findKeyByValue", () => {
  it("returns drama for bestTVShowsByGenre, The Wire", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns comedy for bestTVShowsByGenre, Brooklyn Nine-Nine", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });
  it("returns undefined for bestTVShowsByGenre, That '70s Show", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});