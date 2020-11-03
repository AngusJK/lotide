const letterPositions = function(sentence) {
  const results = {};
  let noSpaces = sentence.split(' ').join('');
  for (let i = 0; i < noSpaces.length; i++) {
    let indices = [];
    for (let j = 0; j < noSpaces.length; j++) {
      if (noSpaces[i] === noSpaces[j]) {
        indices.push(j);
      }
    }
    results[noSpaces[i]] = indices;
  }
  return results;
};

module.exports = letterPositions;