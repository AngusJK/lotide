const assert = require('chai').assert;
const middle = require('../middle');

const evens = [2, 4, 6, 8, 10];
const odds = [1, 3, 5, 7];
const bigs = [354, 5867, 2333, 769, 605, 454];
const onlyOne = [9];
const onlyTwo = [46, 37];

describe("#middle", () => {
  it("should return [6] when passed [2, 4, 6, 8, 10]", () => {
    assert.deepEqual(middle(evens), [6]);
  });
  it("should return [3, 5] when passed [1, 3, 5, 7]", () => {
    assert.deepEqual(middle(odds), [3, 5]);
  });
  it("shoud return [2333, 769] when passed [354, 5867, 2333, 769, 605, 454]", () => {
    assert.deepEqual(middle(bigs), [2333, 769]);
  });
  it("should return [9] when passed [9]", () => {
    assert.deepEqual(middle(onlyOne), [9]);
  });
  it("should return [46, 37] when passed [46, 37]", () => {
    assert.deepEqual(middle(onlyTwo), [46, 37]);
  });
});