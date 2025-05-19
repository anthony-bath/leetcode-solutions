/**
 * @param {string} s
 * @return {character}
 */
const repeatedCharacter = function (s) {
  const freq = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    const pos = s.charCodeAt(i) - 97;

    if (++freq[pos] === 2) {
      return s[i];
    }
  }
};
