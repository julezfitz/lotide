
const map = function(array, callBack) {
  const results = [];
  for (let items of array) {
    results.push(callBack(items));
  }
  return results;
};

module.exports = map;