const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion failed: ${actual} !== ${expected}`);
  }
}

function eqArrays(firstArray, secondArray) {
  let inconsistencies = 0;
  let status = true;
  if (firstArray.length === secondArray.length) {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        inconsistencies += 1;
      }
   }
  } else {
    inconsistencies += 1;
  }
  if (inconsistencies > 0) {
    status = false;
  }
  return status;
}

const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
}

const bestPlayers = {
  yankees: "Babe Ruth",
  giants: "Barry Bonds",
  pirates: "Barry Bonds",
  angels: "Mike Trout",
  redsox: "Ted Williams"
}

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestPlayers, "Barry Bonds"), "giants");
assertEqual(findKeyByValue(bestPlayers, "Ted Williams"), "redsox");
assertEqual(findKeyByValue(bestPlayers, "Ernie Banks"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Derek Jeter"), "yankees"); // expected to fail



