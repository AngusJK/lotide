# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @angusjk/lotide`

**Require it:**

`const _ = require('@angusjk/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: checks whether running two arrays through eqArrays gives the result we expect
* `function2(assertEqual)`: checks whether two given strings, numbers, or booleans are the same or not
* `function3(assertObjectsEqual)`: checks whether running two objects through eqObjects gives the result we expect
* `function4(countLetters)`: returns the number of instances of each letter within a given string
* `function5(countOnly)`: takes an array of names and a list of names to count instances of in that array
* `function6(eqArrays)`: tells whether two given arrays are equal or not
* `function7(eqObjects)`: tells whether two given ojbects are equal or not
* `function8(findKey)`: returns a value of a given object when passed a key corresponding to that value
* `function9(findKeyByValue)`: returns a key of a given object when passed a value corresponding to that key
* `function10(flatten)`: takes in a nested array and returns a single arrays containing all values
* `function11(head)`: returns the first value in a given array
* `function12(letterPosition)`: returns the indexes of each letter contained in a given string
* `function13(luhn_algorithm)`: checks whether a given number is valid by the standards of a luhn algorithm
* `function14(map)`: returns an array containing the letter found at a given index of each string in an array
* `function15(maxProfit)`: returns the largest difference between any number and any subsequent number in a given array
* `function16(middle)`: returns the value(s) found at the middle of a given array
* `function17(poppin_bottles)`: algorithm for determining how many bottles can be purchased and returned with a given amount of money
* `function18(tail)`: returns all but the first value in a given array
* `function19(takeUntil)`: returns all values in an array that match a given criteria
* `function20(without)`: returns an array containing only values not matching the given criteria for removal