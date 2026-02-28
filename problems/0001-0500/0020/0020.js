/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  if (s.length <= 1) return false;

  const stack = [];

  for (const c of s) {
    if (['(', '{', '['].includes(c)) {
      stack.push(c);
      continue;
    }

    const removed = stack.pop();

    switch (removed) {
      case '(':
        if (c !== ')') return false;
        break;

      case '{':
        if (c !== '}') return false;
        break;

      case '[':
        if (c !== ']') return false;
        break;

      default:
        return false;
    }
  }

  return stack.length === 0;
};
