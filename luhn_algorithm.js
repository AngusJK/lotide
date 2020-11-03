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
    return true;
  } else {
    return false;
  }
};

module.exports = check;
