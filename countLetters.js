const countLetters = function(word) {
  let noSpaces = word.split(' ').join('');
  let lettersToCheck = [];
  for (let j = 0; j < noSpaces.length; j++) {
    if (lettersToCheck.includes(noSpaces[j]) === false) {
      lettersToCheck.push(noSpaces[j]);
    }
  }
  let letterObject = {};
  for (let i = 0; i < lettersToCheck.length; i++) {
    let count = 0;
    for (let x = 0; x < noSpaces.length; x++) {
      if (lettersToCheck[i] === noSpaces[x]) {
        count += 1;
      }
    }
    letterObject[lettersToCheck[i]] = count;
  }
  return letterObject;
};

module.exports = countLetters;



