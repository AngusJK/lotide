const middle = function(array) {
  let newArray = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      let midPoint = array.length / 2;
      newArray.push(array[midPoint - 1], array[midPoint]);
      // newArray.push(array[midPoint]);
    } else {
      let midPoint = Math.floor(array.length / 2);
      newArray.push(array[midPoint]);
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

module.exports = middle;