const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

console.log(eqObjects({ a: 1, b: 2 }, { b: 2, a: 1 })); // => true
console.log(eqObjects({ a: 1, b: 2 }, { c: 2, a: 1 })); // => false
console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false
console.log(eqObjects({ a: ['b, c'], b: 3}, { a: ['e, f'], b: 3 })); // => false
console.log(eqObjects({ a: { b: 'a' }, c: 1}, { a: ['a'], c: 1})); // => false
console.log(eqObjects({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 } )); // => true
console.log(eqObjects({ a: [3, 4, 5], b: [7, 8, 9] }, { a: [3, 4, 5], b: [7, 8, 9] })); // => true
console.log(eqObjects({ a: { b: 1, c: 2, d: { e: 3, f: 4 }}, g: 5 }, { a: { b: 1, c: 2, d: { e: 3, f: 7 }}, g: 5 })); // => false
console.log(eqObjects({ a: { b: 1, c: 2, d: { e: 3, f: 4}}, g: 5}, {a: { b: 1, c: 2, d: { e: 3, f: 4}}, g: 5})); // => true

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
