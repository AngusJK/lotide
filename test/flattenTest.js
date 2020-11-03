const assert = require('chai').assert;
const flatten = require('../flatten');

const numbers = ([1, 2, [3, 4], 5, [6]]);
const weights = ([[76], 54, 89, [72, 65, 88, 77], 43]);
const players = ([["Trout", "Ohtani", "Pujols", "Simmons"], "Upton", "Bundy", "Fletcher"]);

describe('#flatten', () => {
  it("should return <[1, 2, 3, 4, 5, 6]> when passed <[1, 2, [3, 4], 5, [6]]>", () => {
    assert.deepEqual(flatten(numbers), [1, 2, 3, 4, 5, 6]);
  });
  it("should return <[76, 54, 89, 72, 65, 88, 77, 43]> when passed <[[76], 54, 89, [72, 65, 88, 77], 43]>", () => {
    assert.deepEqual(flatten(weights), [76, 54, 89, 72, 65, 88, 77, 43]);
  });
  it("shoud return <['Trout', 'Ohtani', 'Pujols', 'Simmons', 'Upton', 'Bundy', 'Fletcher']> when passed <[['Trout', 'Ohtani', 'Pujols', 'Simmons'], 'Upton', 'Bundy', 'Fletcher']>", () => {
    assert.deepEqual(flatten(players), ["Trout", "Ohtani", "Pujols", "Simmons", "Upton", "Bundy", "Fletcher"]);
  });
});