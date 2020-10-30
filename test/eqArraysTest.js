const assertEqual = require("../assertEqual");

const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 4, 3]), false);
assertEqual(eqArrays(["a", "b", "c"], ["a", "b", "c"]), true);
assertEqual(eqArrays(["a", "b", "c"], ["a", "b", "C"]), false);
assertEqual(eqArrays(["a", "b", "c"], ["a", "b"]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);