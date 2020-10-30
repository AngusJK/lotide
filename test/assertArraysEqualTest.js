const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["a", "b", "c"], ["x", "y", "z"]);
assertArraysEqual(["1", "2", "3"], [1, 2, 3]); // Will log "1,2,3 !== 1,2,3"; not sure how to correct this.