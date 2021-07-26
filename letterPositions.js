const eqArrays = function (firstArray, secondArray) {
  for (let i = 0; i <= firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

const letterPositions = function (sentence) {
  const results = {};

  // for (const letter of sentence) {
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  //}
  return results;
};

//Test assertions
let testString = "hello";
console.log(letterPositions(testString));
assertArraysEqual(letterPositions(testString), [[0], [1], [2, 3], [4]]);
assertArraysEqual(letterPositions(testString).e, [1]);
