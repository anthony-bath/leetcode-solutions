/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const areAlmostEqual = function (s1, s2) {
  let s1Freq = {};
  let s2Freq = {};

  let outOfPlace = 0;

  for (let i = 0; i < s1.length; i++) {
    if (!(s1[i] in s1Freq)) {
      s1Freq[s1[i]] = 0;
    }

    if (!(s2[i] in s2Freq)) {
      s2Freq[s2[i]] = 0;
    }

    s1Freq[s1[i]]++;
    s2Freq[s2[i]]++;

    if (s1[i] !== s2[i]) {
      outOfPlace++;

      if (outOfPlace > 2) return false;
    }
  }

  return outOfPlace === 0 || (equalFreqs(s1Freq, s2Freq) && outOfPlace === 2);
};

function equalFreqs(freq1, freq2) {
  return Object.entries(freq1).every(([letter, count]) => freq2[letter] === count);
}
