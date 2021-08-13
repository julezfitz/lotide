
const flatten = function(input) {
  let newArray = [];

  for (let i = 0; i < input.length; i++) {
    if (Array.isArray(input[i])) {
      newArray.push(...flatten(input[i]));
    } else {
      newArray.push(input[i]);
    }
  }
  return newArray;
};


module.exports = flatten;
