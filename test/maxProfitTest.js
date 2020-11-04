const assert = require('chai').assert;
const maxProfit = require('../maxProfit');

const applePrices = [4, 6, 2, 69, 48, 33, 25];
const amazonPrices = [54, 39, 48, 19, 21, 17];
const microsoftPrices = [15, 17, 17];
const exxonPrices = [14, 29, 33, 48, 56, 68, 71];

describe('#maxProfit', () => {
  it("returns 44 when passed [4, 6, 2, 69, 48, 33, 25]", () => {
    assert.deepEqual(maxProfit(applePrices), 44);
  });
  it("returns 37 when passed [54, 39, 48, 19, 21, 17]", () => {
    assert.deepEqual(maxProfit(amazonPrices), 37);
  });
  it("returns 0 when passed [15, 17, 17]", () => {
    assert.deepEqual(maxProfit(microsoftPrices), 0);
  });
  it("returns -1 when passed [14, 29, 33, 48, 56, 68, 71]", () => {
    assert.deepEqual(maxProfit(exxonPrices), -1);
  });
});
