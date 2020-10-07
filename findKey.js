const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(list, action) {
  for (let i in list) { 
    if (action(list[i]) === true) {
      return(i);
    }
  } 
}

const players = {
  "Mike Trout": { number: 27 },
  "Ken Griffey": { number: 24 },
  "Babe Ruth": { number: 3 },
  "Joey Votto": { number: 19 }
}

var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};

assertEqual(findKey(players, x => x.number === 24), "Ken Griffey");
assertEqual(findKey(users, x => x.active === false), "fred");

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");