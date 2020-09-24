const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion failed: ${actual} !== ${expected}`);
  }
}

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

const eqObjects = function(object1, object2) {
  let result = true;
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    result = false;
  }
  for (key of object1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        result = false;
      }
    } else if (object1[key] !== object2[key]) {
      result = false;
    }
  }
  return result;
}

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const dc2 = { d: ["3", 3], c: "1"};

console.log(eqObjects(cd, dc)); // => true
console.log(eqObjects(cd, cd2)); // => false

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const ab2 = { a: "1", b: "1"};

console.log(eqObjects(ab, ba)); // => true
console.log(eqObjects(ab, abc)); // => false
console.log(eqObjects(ab, ab2)); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(cd, dc2), false);