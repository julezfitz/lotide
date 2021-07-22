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

const without = function (source, itemsToRemove) {
  let resultsArray = [];
  for (let a = 0; a <= source.length; a++) {
    resultsArray.push(source[a]);
  }
  for (let i = 0; i <= resultsArray.length; i++) {
    for (let j = 0; j <= itemsToRemove.length; j++) {
      if (resultsArray[i] === itemsToRemove[j]) {
        resultsArray.splice(i, 1);
      }
    }
  }
  return resultsArray;
};

without([1, 2, 3], [1])
without(["1", "2", "3"], [1, 2, "3"])

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
