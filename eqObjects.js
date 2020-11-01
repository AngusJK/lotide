const eqArrays = require('./eqArrays');
//const assertEqual = require('./assertEqual');

/*
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
*/
const eqObjects = function(object1, object2) {
  let passes = true;
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    passes = false;
  } else {
    for (let key of object1Keys) {
      if (typeof object1[key] === 'object' && typeof object2[key] === 'object') { 
        if (Array.isArray(object1[key]) === false && Array.isArray(object2[key]) === false) {
          if (eqObjects(object1[key], object2[key]) === false) {
            passes = false;
          };
        } else if (Array.isArray(object1[key]) === true && Array.isArray(object2[key]) === true) {
          if (eqArrays(object1[key], object2[key]) === false) {
            passes = false;
          }
        } else {
          passes = false;
        }
      } else if (object1[key] !== object2[key]) {
         passes = false;
       }
    }
  }
  return passes;
}


module.exports = eqObjects;