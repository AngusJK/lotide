const assertObjectsEqual = require('../assertObjectsEqual');

const letters1 = { a: "1", b: "2" };
const letters2 = { b: "2", a: "1" };
const letters3 = { a: "1", b: "3" };

assertObjectsEqual(letters1, letters2); // => should pass
assertObjectsEqual(letters1, letters3); // => should fail
assertObjectsEqual(letters2, letters3); // => should fail