function eqArrays(firstArray, secondArray) {
  let inconsistencies = 0;
  let status = true;
  if (firstArray.length === secondArray.length) {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
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
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion failed: ${actual} !== ${expected}`);
  }
}; 
const temperatures = [-25, -19, -8, 6, 4, 0, -7];
const temperatures2 = [-4, -5, -28];
const temperatures3 = [34, -3, -54];

const takeUntil = function(array, callback) {
  let belowZero = [];
  for (let number of array ) {
    if (callback(number)) {
      belowZero.push(number);
    } else {
      return belowZero
    }
  }
  return belowZero;
}

const freezing = takeUntil(temperatures, temperature => temperature < 0);
const stillFreezing = takeUntil(temperatures2, temperature => temperature < 0);
const notSoFreezing = takeUntil(temperatures3, temperature => temperature < 0);

assertArraysEqual(freezing, [-25, -19, -8]);
assertArraysEqual(stillFreezing, [-4, -5, -28]);
assertArraysEqual(notSoFreezing, []);


