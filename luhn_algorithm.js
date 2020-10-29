const check = function(num) {
  let stringNum = String(num);
  let sum = parseInt(stringNum[stringNum.length - 1]);
  for (let i = stringNum.length - 2; i >= 0; i = i - 2) {
    let value = parseInt(stringNum.charAt(i));
    value = value * 2;
    if (value > 9) {
      sum += (value - 9);
    } else {
      sum += value;
    }
  }
  for (let i = stringNum.length - 3; i >= 0; i = i - 2) {
   let value = parseInt(stringNum.charAt(i));
   sum += value;
  }
  if (sum % 10 === 0) {
    console.log(`💚 Congratulations! ${num} is (possibly) a valid identification number!`)
  } else {
    console.log("❌ Sorry, this number is not valid. Try again.");
  }
}

check(3498543678921080);
check(3498543678921081);
check(3498543678921082);
check(3498543678921083);
check(3498543678921084);
check(3498543678921085);
check(3498543678921086);
check(3498543678921087);
check(3498543678921088);
check(3498543678921089);