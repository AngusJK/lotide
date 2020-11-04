const maxProfit = function(input) {
  let differences = [];
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      differences.push(input[i] - input[j]);
    }
  }
  let largest = -1;
  for (let i = 0; i < differences.length; i++) {
    if (differences[i] > largest) {
      largest = differences[i];
    }
  }
  return largest;
};

module.exports = maxProfit;


