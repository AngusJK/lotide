function tail(array) {
  let numbers = array.slice(1);
  return numbers
}

let someStuff = [4, 5, 3, 7, 6, 2];
let heights = [76, 45, 59];
let oneThing = [61];

const result1 = tail(someStuff);
const result2 = tail(heights);
const result3 = tail(oneThing);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion failed: ${actual} !== ${expected}`);
  }
};

console.log(result1);
console.log(result2);
console.log(result3);
console.log(assertEqual(result1.length, 5));
console.log(assertEqual(result2[0], 45));
console.log(assertEqual(result2[1], 59));
console.log(assertEqual(someStuff.length, 6));
console.log(assertEqual(heights[0], 76));








