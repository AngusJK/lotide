const assert = require('chai').assert;
const without = require('../without');

const words = ["hello", "world", "lighthouse"];
const runTo4 = [1, 2, 3, 4];
const runTo5 = [1, 2, 3, 4, 5];
const runTo10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numString = ["1", "2", "3"];

describe('#without', () => {
  it("returns ['hello', 'world'] when passed ['hello', 'world', 'lighthouse'] and ['lighthouse']", () => {
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]);
  });
  it("returns [2, 4] when passed [1, 2, 3, 4] and [1, 3]", () => {
    assert.deepEqual(without(runTo4, [1, 3]), [2, 4]);
  });
  it("returns [1, 3, 4, 5] when passed [1, 2, 3, 4, 5] and [6, 6, 2, 6, 6, 7]", () => {
    assert.deepEqual(without(runTo5, [6, 6, 2, 6, 6, 7]), [1, 3, 4, 5]);
  });
  it("returns [1, 3, 5, 7, 9] when passed [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and [2, 4, 6, 8, 10]", () => {
    assert.deepEqual(without(runTo10, [2, 4, 6, 8, 10]), [1, 3, 5, 7, 9]);
  });
  it("returns ['1', '2'] when passed ['1', '2', '3'] and [1, 2, '3']", () => {
    assert.deepEqual(without(numString, [1, 2, "3"]), ["1", "2"]);
  });
});