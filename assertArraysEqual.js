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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["a", "b", "c"], ["x", "y", "z"]);
assertArraysEqual(["1", "2", "3"], [1, 2, 3]); // Will log "1,2,3 !== 1,2,3"; not sure how to correct this.



