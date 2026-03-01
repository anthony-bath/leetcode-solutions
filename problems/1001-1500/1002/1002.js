/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  function getFreq(word) {
    const freq = Array(26).fill(0);

    for (let i = 0; i < word.length; i++) {
      freq[word.charCodeAt(i) - 97]++;
    }

    return freq;
  }

  const freqs = words.map(getFreq);
  const result = [];

  for (let i = 0; i < 26; i++) {
    if (freqs.some((freq) => freq[i] === 0)) continue;

    const letter = String.fromCharCode(i + 97);
    let min = Math.min(...freqs.map((freq) => freq[i]));

    while (min > 0) {
      result.push(letter);
      min--;
    }
  }

  return result;
};
