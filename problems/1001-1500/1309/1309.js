/**
 * @param {string} s
 * @return {string}
 */
const freqAlphabets = function (s) {
  const output = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i + 1] && s[i + 2] && s[i + 2] === '#') {
      output.push(String.fromCharCode(96 + Number(`${s[i]}${s[i + 1]}`)));
      i += 2;
    } else {
      output.push(String.fromCharCode(96 + Number(`${s[i]}`)));
    }
  }

  return output.join('');
};
