const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns { t: [0, 4], r: [1], o: [2], u: [3] } when passed 'trout'", () => {
    assert.deepEqual(letterPositions("trout"), { t: [0, 4], r: [1], o: [2], u: [3] });
  });
  it("returns { l: [0], i: [1, 10], g: [2], h: [3, 5, 13, 15], t: [4, 12], o: [6, 16], u: [7, 17], s: [9, 14, 19], n: [11] } when passed 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house"), { l: [0], i: [1, 10], g: [2], h: [3, 5, 13, 15], t: [4, 12], o: [6, 16], u: [7, 17], s: [8, 18], e: [9, 14, 19], n: [11] });
  });
});
