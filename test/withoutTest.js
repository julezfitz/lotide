const without = require('../without');
const assert = require('chai').assert;

// //Test Assertions

const words = ["hello", "world", "lighthouse"];
const words2 = ["super", "mario", "birthday", "party"];

describe("#without", () => {
  it("returns [2,3] for [1, 2, 3] without [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("returns ['1','2'] for ['1', '2', '3'] without [1, 2, '3']", () => {
    assert.deepEqual(without(['1', '2', '3'], [1, 2, '3']), ['1','2']);
  });
  it("returns ['hello','world'] for ['hello','world','lighthouse'] without ['lighthouse']", () => {
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]);
  });
  it("returns ['super','mario','party'] for ['super', 'mario', 'birthday', 'party'] without ['birthday']", () => {
    assert.deepEqual(without(words2, ["birthday"]), ["super", "mario", "party"]);
  });
});