const flatten = require('../flatten');
const assert = require('chai').assert;

//Test assertions
let originalArray = [1, 2, [3, 4], 5, [6]];
const newArray = [[34, 5], 6, 5, 7, [78, 3, 2]];

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten(originalArray), [1, 2, 3, 4, 5, 6]);
  });
  it("returns [34,5,6,5,7,78,3,2] for [[34,5],6,5,7,[78,3,2]]", () => {
    assert.deepEqual(flatten(newArray), [34, 5, 6, 5, 7, 78, 3, 2]);
  });
});