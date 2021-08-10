const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays.js');
const countLetters = require('./countLetters.js');
const assertArraysEqual = require('./assertArraysEqual.js');
const assertEqual = require('./assertEqual.js');
const assertObjectsEqual = require('./assertObjectsEqual.js');
const countOnly = require('./countOnly.js');
const eqObjects = require('./eqObjects.js');
const findKey = require('./findkey.js');
const findKeyByValue = require('./findKeyByValue.js');
const flatten = require('./flatten.js');
const letterPositions = require('./letterPositions.js');
const map = require('./map.js');
const takeUntil = require('./takeUntil.js');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  eqArrays: eqArrays,
  countLetters: countLetters,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countOnly: countOnly,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil
};