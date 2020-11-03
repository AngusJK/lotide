const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const bestPlayers = {
  yankees: "Babe Ruth",
  giants: "Barry Bonds",
  pirates: "Barry Bonds",
  angels: "Mike Trout",
  redsox: "Ted Williams"
};

describe('#findKeyByValue', () => {
  it("returns <drama> when passed an object containing <drama: 'The Wire'> and the value <'The Wire'>", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"));
  });
  it("returns <undefined> when passed a value and an object that doesn't contain that value", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
  });
  it("returns <giants> when passed an object conatining <giants: 'Barry Bonds'> and the value <'Barry Bonds'>", () => {
    assert.strictEqual(findKeyByValue(bestPlayers, "Barry Bonds"));
  });
  it("returns <redsox> when passed an object containing <redsox: 'Ted Williams'> and the value <'Ted Williams'>", () => {
    assert.strictEqual(findKeyByValue(bestPlayers, "Ted Williams"));
  });
  it("returns <undefined> when passed a value and an object that doesn't contain that value", () => {
    assert.strictEqual(findKeyByValue(bestPlayers, "Ernie Banks"));
  });
});