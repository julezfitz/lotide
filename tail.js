const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i <= firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};

let array = [1, 2, 3];
assertArraysEqual(tail([1, 2, 3]), [2,3]);

const testArray = ["Hello", "Lighthouse", "Labs"];
assertArraysEqual(tail(testArray), ["Lighthouse", "Labs"]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertArraysEqual(tail(words),["Lighthouse", "Labs"]);

console.log(array);
console.log(testArray);
console.log(words);
