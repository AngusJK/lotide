//const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(firstObject, secondObject) {
  const inspect = require('util').inspect;
  if (eqObjects(firstObject, secondObject)) {
    console.log(`✅ Assertion passed: ${inspect(firstObject)} === ${inspect(secondObject)}`);
  } else {
    console.log(`🔴 Assertion failed: ${inspect(firstObject)} !== ${inspect(secondObject)}`);
  }
}
/*
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
*/

module.exports = assertObjectsEqual;