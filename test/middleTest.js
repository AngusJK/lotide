const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

const evens = [2, 4, 6, 8, 10];
const odds = [1, 3, 5, 7];
const bigs = [354, 5867, 2333, 769, 605, 454];
const onlyOne = [9];
const onlyTwo = [46, 37];

assertArraysEqual(middle(evens), [6]);
assertArraysEqual(middle(odds), [3, 5]);
assertArraysEqual(middle(bigs), [2333, 769]);
assertArraysEqual(middle(onlyOne), [9]);
assertArraysEqual(middle(onlyTwo), [46, 37]);