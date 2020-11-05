const without = function(source, itemsToRemove) {
  let editedArray = [];
  for (let i = 0; i < source.length; i++) {
    let counter = 0;
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (source[i] === itemsToRemove[x]) {
        counter += 1;
      }
    }
    if (counter === 0) {
      editedArray.push(source[i]);
    }
  }
  return editedArray;
};

module.exports = without;

