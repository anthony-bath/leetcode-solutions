const { max } = Math;
const VOWELS = ['a', 'e', 'i', 'o', 'u'];

/**
 * @param {string} s
 * @return {number}
 */
const maxFreqSum = function (s) {
  let [bestV, bestC] = [0, 0];
  const freq = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) - 97;
    freq[index] += 1;

    if (VOWELS.includes(s[i])) {
      bestV = max(bestV, freq[index]);
    } else {
      bestC = max(bestC, freq[index]);
    }
  }

  return bestV + bestC;
};
