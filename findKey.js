const findKey = function(list, action) {
  for (let i in list) {
    if (action(list[i]) === true) {
      return i;
    }
  }
};

module.exports = findKey;