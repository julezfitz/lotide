const without = function(source, itemsToRemove) {
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

module.exports = without;
