const flatten = function(input) {
  let flatArray = [];
  for (let i = 0; i < input.length; i++) {
    if (Array.isArray(input[i])) {
      for (let x = 0; x < input[i].length; x++) {
        flatArray.push(input[i][x]);
      }
    } else {
      flatArray.push(input[i]);
    }
  }
  return flatArray;
};

module.exports = flatten;
