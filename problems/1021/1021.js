/**
 * @param {string} s
 * @return {string}
 */
const removeOuterParentheses = function (s) {
  let stack = 0;
  let result = '';

  for (let i = 0; i < s.length; i++) {
    let compare;

    if (s[i] === '(') {
      stack++;
      compare = stack;
    } else {
      compare = stack;
      stack--;
    }

    if (compare > 1) {
      result += s[i];
    }
  }

  return result;
};
