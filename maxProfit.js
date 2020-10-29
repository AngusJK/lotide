const maxProfit = function(input) {
  let differences = [];
  for (let i = 0; i < input.length - 1; i++ ) {
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
  console.log(largest);  
}

const applePrices = [4, 6, 2, 69, 48, 33, 25];
const amazonPrices = [54, 39, 48, 19, 21, 17];
const microsoftPrices = [15, 17, 17];
const exxonPrices = [14, 29, 33, 48, 56, 68, 71];

maxProfit(applePrices); // => 44
maxProfit(amazonPrices); // => 37
maxProfit(microsoftPrices); // => 0
maxProfit(exxonPrices); // => -1

