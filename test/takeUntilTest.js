const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

const temperatures = [25, 19, -8, 6, 4, 0, -7];
const temperatures2 = [-4, -5, -28];
const temperatures3 = [34, -3, -54];
const letters = ["a", "b", "c", "d", "e"];

describe('#takeUntil', () => {
  it("returns [25, 19] when passed [25, 19, -8, 6, 4, 0, -7] and condition <0", () => {
    assert.deepEqual(takeUntil(temperatures, temperature => temperature < 0), [25, 19]);
  });
  it("returns an empty array when passed [-4, -5, -28] and condition <0", () => {
    assert.deepEqual(takeUntil(temperatures2, temperature => temperature < 0), []);
  });
  it("returns 34 when passed [34, -3, -54] and condition < 0", () => {
    assert.deepEqual(takeUntil(temperatures3, temperature => temperature < 0), [34]);
  });
  it("returns ['a', 'b', 'c'] when passed ['a', 'b', 'c', 'd', 'e'] and condition <'d'>", () => {
    assert.deepEqual(takeUntil(letters, letter => letter === "d"), ["a", "b", "c"]);
  });
});