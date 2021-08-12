
const flatten = function(input) {
  let newArray = [];
  for (let i = 0; i < input.length; i++) {
    if (Array.isArray(input[i]) === false) {
      newArray.push(input[i]);
    } else {
      for (let j = 0; j < input[i].length; j++) {
        newArray.push(input[i][j]);
      }
    }
  }
  return newArray;
};

module.exports = flatten;
