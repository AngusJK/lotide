const assertEqual = require('./assertEqual');

const eqArrays = function(firstArray, secondArray) {
  let inconsistencies = 0;
  let status = true;
  if (firstArray.length === secondArray.length) {
    for (let i = 0; i < firstArray.length; i++) {
      if (Array.isArray(firstArray[i])) {
        if (eqArrays(firstArray[i], secondArray[i]) === false) {
          status = false;
        }
      } else if (firstArray[i] !== secondArray[i]) {
        inconsistencies += 1;
      }
    }
  } else {
    inconsistencies += 1;
  }
  if (inconsistencies > 0) {
    status = false;
  }
  return status;
};

module.exports = eqArrays;
