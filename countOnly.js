const countOnly = function(allItems, itemsToCount) {
  let filtered = {};
  for (let name in itemsToCount) {
    if (itemsToCount[name]) {
      let count = 0;
      for (let i = 0; i < allItems.length; i++) {
        if (name === allItems[i]) {
          count += 1;
        }
      }
      if (count > 0) {
        filtered[name] = count;
      }
    }
  }
  return filtered;
};

module.exports = countOnly;