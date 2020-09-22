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

function middle(array) {
  let newArray = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      let midPoint = array.length/2
      newArray.push(array[midPoint - 1], array[midPoint]);
      // newArray.push(array[midPoint]);
    } else {
      let midPoint = Math.floor(array.length/2);
      newArray.push(array[midPoint]);
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray
}

const evens = [2, 4, 6, 8, 10];
const odds = [1, 3, 5, 7];
const bigs = [354, 5867, 2333, 769, 605, 454];
const onlyOne = [9];
const onlyTwo = [46, 37];

assertEqual(middle(evens), [6]);
assertEqual(middle(odds), [3, 5]);
assertEqual(middle(bigs), [2333, 769]);
assertEqual(middle(onlyOne), [9]);
assertEqual(middle(onlyTwo), [46, 37]);


