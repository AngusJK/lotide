const takeUntil = function(array, callback) {
  let filtered = [];
  for (let number of array) {
    if (!callback(number)) {
      filtered.push(number);
    } else {
      return filtered;
    }
  }
  return filtered;
};

module.exports = takeUntil;

