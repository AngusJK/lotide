const tail = require('../tail');
const assertEqual = require('../assertEqual');

let someStuff = [4, 5, 3, 7, 6, 2];
let heights = [76, 45, 59];
let oneThing = [61];

assertEqual(tail(someStuff).length, 5);
assertEqual(tail(heights)[0], 45);
assertEqual(tail(heights)[1], 59);
assertEqual(tail(oneThing), []);

