const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", function() {
  it("should return 5 when given an array with 6 values", function() {
    assert.deepEqual(tail([4, 5, 3, 7, 6, 2]).length, 5);
  });
  it("shoud return [45, 59] when passed [76, 45, 59]", function() {
    assert.deepEqual(tail([76, 45, 59]), [45, 59]);
  });
  it("should return an empty array when passed an array with a single value", function() {
    assert.deepEqual(tail([61]), []);
  });
});
