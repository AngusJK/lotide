const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(word) {
  let noSpaces = word.split(' ').join('')
  let lettersToCheck = [];
  for (let j = 0; j < noSpaces.length; j++) {
    if (lettersToCheck.includes(noSpaces[j]) === false) {
      lettersToCheck.push(noSpaces[j]);
    }
  }
  let letterObject = {};
  for (let i = 0; i < lettersToCheck.length; i++) {
    let count = 0;
    for (let x = 0; x < noSpaces.length; x++) {
      if (lettersToCheck[i] === noSpaces[x]) {
        count += 1;
      }
    }
    letterObject[lettersToCheck[i]] = count;
  }
  return letterObject
} 

assertEqual(countLetters("trout"), { t: 2, r: 1, o: 1, u: 1 });
assertEqual(countLetters("lotide"), { l: 1, o: 1, t: 1, i: 1, d: 1, e: 1 });
assertEqual(countLetters("a bb ccc dddd"), { a: 1, b: 2, c: 3, d: 4 });

