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
const temperatures = [25, 19, -8, 6, 4, 0, -7];
const temperatures2 = [-4, -5, -28];
const temperatures3 = [34, -3, -54];
const letters = ["a", "b", "c", "d", "e"];

const takeUntil = function(array, callback) {
  let filtered = [];
  for (let number of array ) {
    if (!callback(number)) {
      filtered.push(number);
    } else {
      return filtered;
    }
  }
  return filtered;
}

const aboveZero = takeUntil(temperatures, temperature => temperature < 0);
const aboveZero2 = takeUntil(temperatures2, temperature => temperature < 0);
const aboveZero3 = takeUntil(temperatures3, temperature => temperature < 0);
const upToD = takeUntil(letters, letter => letter === "d");

assertArraysEqual(aboveZero, [25, 19]);
assertArraysEqual(aboveZero2, []);
assertArraysEqual(aboveZero3, [34]);
assertArraysEqual(upToD, ["a", "b", "c"]);

