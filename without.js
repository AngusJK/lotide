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

function without(source, itemsToRemove) {
  let editedArray = [];
  for (let i = 0; i < source.length; i++) {
    let counter = 0;
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (source[i] === itemsToRemove[x]) {
        counter += 1;
      }  
    }  
    if (counter === 0) {
      editedArray.push(source[i]);
    }
  }
  return editedArray;
}


const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
console.log(words);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


console.log(without([1, 2, 3, 4], [1, 3]));
console.log(without([1, 2, 3, 4, 5], [6, 6, 2, 6, 6, 7]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 4, 6, 8, 10]));


assertArraysEqual(["a", "b"], ["a", "b"]);
assertArraysEqual([1, 2, 3, 4, 5], [2, 4]);
assertArraysEqual([5, 6, 7, 8], [5, 6]);
assertArraysEqual([1, 2, 3], [4, 5, 6]);

