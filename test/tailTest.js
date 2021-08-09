
const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');

//Test assertions

let array = [1, 2, 3];
assertArraysEqual(tail([1, 2, 3]), [2,3]);

const testArray = ["Hello", "Lighthouse", "Labs"];
assertArraysEqual(tail(testArray), ["Lighthouse", "Labs"]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertArraysEqual(tail(words),["Lighthouse", "Labs"]);

//Check that original arrays are unchanged
console.log(array);
console.log(testArray);
console.log(tail(words));