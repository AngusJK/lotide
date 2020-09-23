const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion failed: ${actual} !== ${expected}`);
  }
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



