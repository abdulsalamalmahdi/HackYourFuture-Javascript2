'use strict';

function createBase(base) {
  return function(y) {
    return base + y;
  };
  // Replace this comment and the next line with your code
  console.log(base);
}

const addSix = createBase(6);

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

// Do not change or remove anything below this line
module.exports = createBase;
