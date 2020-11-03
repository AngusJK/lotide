const countLetters = require('../countLetters');

const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion failed: ${actual} !== ${expected}`);
  }
};

assertEqual(countLetters("trout"), { t: 2, r: 1, o: 1, u: 1 });
assertEqual(countLetters("lotide"), { l: 1, o: 1, t: 1, i: 1, d: 1, e: 1 });
assertEqual(countLetters("a bb ccc dddd"), { a: 1, b: 2, c: 3, d: 4 });