/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function (s, t) {
  function buildString(input) {
    const output = [];

    for (const char of input) {
      if (char === '#') {
        output.pop();
      } else {
        output.push(char);
      }
    }

    return output.join('');
  }

  return buildString(s) === buildString(t);
};
