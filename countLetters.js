const assertEqual = require('./assertEqual.js');

const countLetters = function(sentence) {
  const results = {};

  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

const result1 = countLetters("apple I ate");

assertEqual(result1["p"], 2);
assertEqual(result1["z"], undefined);
assertEqual(result1["a"], 2);
assertEqual(result1["l"], 1);
assertEqual(result1[" "], undefined);

module.exports = countLetters;