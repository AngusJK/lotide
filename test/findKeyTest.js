const findKey = require('../findKey');
const assert = require('chai').assert;

const players = {
  "Mike Trout": { number: 27 },
  "Ken Griffey": { number: 24 },
  "Babe Ruth": { number: 3 },
  "Joey Votto": { number: 19 }
};

const users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};

describe('#findKey', function() {
  it("returns <Ken Griffey> when searching for a name corresponding to the value <24>", () => {
    assert.strictEqual(findKey(players, x => x.number === 24), "Ken Griffey");
  });
  it("returns <fred> when searching for a name corresponding to the value <false>", () => {
    assert.strictEqual(findKey(users, x => x.active === false), "fred");
  });
  it("returns <noma> when searching for a name corresponding to the value <2>", () => {
    assert.strictEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2), "noma");
  });
});
