
const takeUntil = function(array, callback) {
  let results = [];
  for (let items of array) {
    if (callback(items) === false) {
      results.push(items);
    } else {
      return results;
    }
  }
};

module.exports = takeUntil;
