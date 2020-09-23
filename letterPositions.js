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
  // if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion failed: ${actual} !== ${expected}`);
  }
}

const letterPositions = function(sentence) {
  const results = {};
  let noSpaces = sentence.split(' ').join('');
  for (let i = 0; i < noSpaces.length; i++) {
    let indices = [];
    for (let j = 0; j < noSpaces.length; j++) {
      if (noSpaces[i] === noSpaces[j]) {
        indices.push(j);
      }
    }
    results[noSpaces[i]] = indices;
  }
  return results;
}

console.log(letterPositions("trout"));
assertEqual(letterPositions("lighthouse in the house"));
assertEqual(letterPositions("trout"), { t: [0, 4], r: [1], o: [2], u: [3] });


