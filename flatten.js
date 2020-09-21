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

const assertEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion failed: ${actual} !== ${expected}`);
  }
};

function flatten(input) {
  let flatArray = [];
  for (let i = 0; i < input.length; i++) {
    if (Array.isArray(input[i])) {
      for (let x = 0; x < input[i].length; x++) {
        flatArray.push(input[i][x]);
      } 
    } else {
      flatArray.push(input[i]);
    }
  }
  return flatArray;
}

const numbers = ([1, 2, [3, 4], 5, [6]]);
const weights = ([[76], 54, 89, [72, 65, 88, 77], 43]);
const players = ([["Trout", "Ohtani", "Pujols", "Simmons"], "Upton", "Bundy", "Fletcher"]);

assertEqual(flatten(numbers), [1, 2, 3, 4, 5, 6]);
assertEqual(flatten(weights), [76, 54, 89, 72, 65, 88, 77, 43]);
assertEqual(flatten(players), ["Trout", "Ohtani", "Pujols", "Simmons", "Upton", "Bundy", "Fletcher"]);

