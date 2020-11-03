const assert = require('chai').assert;
const check = require('../luhn_algorithm');

describe("#check", () => {
  it("returns false when passed 3498543678921080", () => {
    assert.strictEqual(check(3498543678921080), false);
  });
  it("returns false when passed 3498543678921081", () => {
    assert.strictEqual(check(3498543678921081), false);
  });
  it("returns false when passed 3498543678921082", () => {
    assert.strictEqual(check(3498543678921082), false);
  });
  it("returns true when passed 3498543678921083", () => {
    assert.strictEqual(check(3498543678921083), true);
  });
  it("returns false when passed 3498543678921084", () => {
    assert.strictEqual(check(3498543678921084), false);
  });
  it("returns false when passed 3498543678921085", () => {
    assert.strictEqual(check(3498543678921085), false);
  });
  it("returns false when passed 3498543678921086", () => {
    assert.strictEqual(check(3498543678921086), false);
  });
  it("returns false when passed 3498543678921087", () => {
    assert.strictEqual(check(3498543678921087), false);
  });
  it("returns false when passed 3498543678921088", () => {
    assert.strictEqual(check(3498543678921088), false);
  });
  it("returns false when passed 3498543678921089", () => {
    assert.strictEqual(check(3498543678921089), false);
  });
});



/*
check(3498543678921080);
check(3498543678921081);
check(3498543678921082);
check(3498543678921083);
check(3498543678921084);
check(3498543678921085);
check(3498543678921086);
check(3498543678921087);
check(3498543678921088);
check(3498543678921089);
*/