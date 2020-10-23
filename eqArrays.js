const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion failed: ${actual} !== ${expected}`);
  }
};

function eqArrays(firstArray, secondArray) {
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
}

console.log(eqArrays( [[2, 3], [4]], [[2, 3], [4]] )); // => true
console.log(eqArrays( [[2, 3], [4]], [[2, 3], [4, 5]] )); // => false
console.log(eqArrays( [[2, 3], [4]], [[2, 3], 4] )); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 4, 3]), false);
assertEqual(eqArrays(["a", "b", "c"], ["a", "b", "c"]), true);
assertEqual(eqArrays(["a", "b", "c"], ["a", "b", "C"]), false);
assertEqual(eqArrays(["a", "b", "c"], ["a", "b"]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
