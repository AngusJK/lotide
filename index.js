const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = rquire('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const head   = require('./head');
const letterPositions = require('./letterPositions');
const check = require('./luhn_algorithm');
const main = require('./main');
const map = require('./map');
const maxProfid = require('./maxProfit');
const middle = require('./middle');
const sayHelloTo = require('./moduleCheck');
const poppin_bottles = require('./poppin_bottles');
const tail   = require('./tail');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  head:   head,
  letterPositions: letterPositions,
  check: check,
  main: main,
  map: map,
  middle: middle,
  sayHelloTo: sayHelloTo,
  poppin_bottles: poppin_bottles,
  tail:   tail,
  takeUntil: takeUntil,
  without: without
};