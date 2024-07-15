/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = function (s) {
  const stack = [];

  for (const char of s) {
    if (stack.length && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
};
