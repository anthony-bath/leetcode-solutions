const { max } = Math;

/**
 * @param {string} s
 * @return {number}
 */
const maxDepth = function (s) {
  let depth = 0;
  let maxDepth = 0;

  for (const char of s) {
    if (char === '(') {
      depth++;
      maxDepth = max(depth, maxDepth);
    } else if (char === ')') {
      depth--;
    }
  }

  return maxDepth;
};
