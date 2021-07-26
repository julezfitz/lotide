const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  let keyNames = Object.keys(object);
  console.log(keyNames);
  let i = 0;
  for (const key in object) {
    let titleName = object[key];
    if (titleName === value) {
      return keyNames[i];
    }
    i++;
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

//Test assertions
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);