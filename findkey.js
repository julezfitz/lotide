// Returns the first key with a truthy value
const findKey = function(object, callback) {
  for (let keys in object) {
    if (callback(object[keys]) === true) {
      return keys;
    }
  }
};

module.exports = findKey;