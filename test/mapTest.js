const assert = require('chai').assert;
const map = require('../map');

const giants = ["mays", "stargell", "bonds", "ott", "posey", "clark"];
const cities = ["Paris", "London", "Berlin"];

describe('#map', () => {
  it("returns ['m', 's', 'b', 'o', 'p', 'c'] when passed ['mays', 'stargell', 'bonds', 'ott', 'posey', 'clark']", () => {
    assert.deepEqual(map(giants, giant => giant[0]), ["m", "s", "b", "o", "p", "c"]);
  });
  it("returns ['P', 'L', 'B'] when passed ['Paris', 'London', 'Berlin']", () => {
    assert.deepEqual(map(cities, city => city[1]), ["a", "o", "e"]);
  });
});

