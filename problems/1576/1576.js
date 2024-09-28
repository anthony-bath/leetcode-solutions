/**
 * @param {string} s
 * @return {string}
 */
const modifyString = function (s) {
  let output = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '?') {
      const excluded = new Set();

      if (s[i - 1] === '?') {
        excluded.add(output[i - 1]);
      } else {
        excluded.add(s[i - 1]);
      }

      if (s[i + 1] && s[i + 1] !== '?') {
        excluded.add(s[i + 1]);
      }

      for (let x = 97; x < 123; x++) {
        const letter = String.fromCharCode(x);

        if (!excluded.has(letter)) {
          output += letter;
          break;
        }
      }
    } else {
      output += s[i];
    }
  }

  return output;
};
