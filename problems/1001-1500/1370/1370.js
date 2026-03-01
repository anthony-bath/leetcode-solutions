/**
 * @param {string} s
 * @return {string}
 */
const sortString = function (s) {
  const freq = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - 97]++;
  }

  const result = [];

  while (result.length < s.length) {
    for (let i = 0; i < 26; i++) {
      if (freq[i] > 0) {
        result.push(String.fromCharCode(i + 97));
        freq[i]--;
      }
    }

    for (let i = 25; i >= 0; i--) {
      if (freq[i] > 0) {
        result.push(String.fromCharCode(i + 97));
        freq[i]--;
      }
    }
  }

  return result.join('');
};
