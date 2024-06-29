/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const output = [];
  const isLetter = /[a-z]/i;

  let index = s.length - 1;

  while (index >= 0) {
    if (isLetter.test(s[output.length])) {
      if (isLetter.test(s[index])) {
        output.push(s[index--]);
      } else {
        index--;
      }
    } else {
      output.push(s[output.length]);
    }
  }

  while (output.length < s.length) {
    output.push(s[output.length]);
  }

  return output.join('');
};
