const args = process.argv.slice(2);

const poppinBottles = function(dollars) {
  let bottleTotal = Math.trunc(dollars / 2);
  let capTotal = bottleTotal;
  let counter = bottleTotal;
  let bottleTrades = 0;
  let capTrades = 0;
  const tradeIn = function(items) {
    if (items === "bottles") {
      bottleTotal -= 2;
      bottleTrades += 1;
    } else if (items === "caps") {
      capTotal -= 4;
      capTrades += 1;
    }
    bottleTotal += 1;
    capTotal += 1;
    counter += 1;
  };
  while (bottleTotal >= 2 || capTotal >= 4) {
    if (bottleTotal >= 2) {
      tradeIn("bottles");
    }
    if (capTotal >= 4) {
      tradeIn("caps");
    }
  }
  console.log(`TOTAL BOTTLES: ${counter}`);
  console.log(`REMAINING BOTTLES: ${bottleTotal}`);
  console.log(`REMAINING CAPS: ${capTotal}`);
  console.log(`TOTAL EARNED: \n BOTTLES: ${bottleTrades} \n CAPS: ${capTrades}`);
};

poppinBottles(args);