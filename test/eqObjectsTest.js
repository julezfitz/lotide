const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

//Test assertions

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

const obj1 = { a: { z: 1 }, b: 2 };
const obj2 = { a: { z: 1 }, b: 2 };

const obj3 = { a: { y: 0, z: 1 }, b: 2 };
const obj4 = { a: { z: 1 }, b: 2 };

const obj5 = { a: { y: 0, z: 1 }, b: 2 };
const obj6 = { a: 1, b: 2 };

const obj7 = { test: { a: 10, b: { x: 5 } } };
const obj8 = { test: { a: 10, b: { x: 5 } } };

const obj9 = { test: { a: 10 }, c: 7 };
const obj10 = { test: { a: 10 }, c: 7 };

const object1 = { a: '1', b: 2 };
const object3 = { a: '1', b: 2, c: 43};

describe("#eqObjects", () => {
  it("returns true for ab ba", () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  it("returns false for ab abc", () => {
    assert.strictEqual(eqObjects(ab, abc), false);
  });
  it("returns true for cd dc", () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  });
  it("returns false for cd cd2", () => {
    assert.strictEqual(eqObjects(cd, cd2), false);
  });

  it("returns true for obj1 obj2", () => {
    assert.strictEqual(eqObjects(obj1, obj2), true);
  });
  it("returns false for obj3 obj4", () => {
    assert.strictEqual(eqObjects(obj3, obj4), false);
  });
  it("returns false for obj5 obj6", () => {
    assert.strictEqual(eqObjects(obj5, obj6), false);
  });
  it("returns true for obj7 obj8", () => {
    assert.strictEqual(eqObjects(obj7, obj8), true);
  });
  it("returns true for obj9 obj10", () => {
    assert.strictEqual(eqObjects(obj9, obj10), true);
  });
  it("returns false for object1 object3", () => {
    assert.strictEqual(eqObjects(object1, object3), false);
  });
});