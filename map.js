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

const giants = ["mays", "stargell", "bonds", "ott", "posey", "clark"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const result1 = map(giants, giant => giant[0]);
const result2 = map(giants, giant => giant[1]);
const result3 = map(giants, giant => giant.length);

assertArraysEqual(result1, ["m", "s", "b", "o", "p", "c"]);
assertArraysEqual(result2, ["a", "t", "o", "t", "o", "l"]);
assertArraysEqual(result3, [4, 8, 5, 3, 5, 5]);



