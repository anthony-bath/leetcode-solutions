/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  const license = licensePlate.toLowerCase().replace(/[\d\s]/g, '');
  let shortest = null;

  outer: for (let i = 0; i < words.length; i++) {
    let word = words[i];

    for (const char of license) {
      if (word.indexOf(char) === -1) continue outer;
      word = word.replace(char, '');
    }

    if (!shortest || words[i].length < shortest.length) shortest = words[i];
  }

  return shortest;
};
