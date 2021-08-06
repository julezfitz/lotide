const assertEqual = require('./assertEqual.js');

const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (value === object[key]) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  /*eslint-disable */
  sci_fi: "The Expanse",
  /*eslint-enable */
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

//Test assertions
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);