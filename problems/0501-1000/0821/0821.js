const { abs, min } = Math;

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  let prev = s.indexOf(c);
  let next = prev;
  const result = [];

  for (let j = 0; j < s.length; j++) {
    if (s[j] === c) {
      prev = j;
      result.push(0);
      next = s.indexOf(c, j + 1);
      continue;
    }

    result.push(min(abs(prev - j), abs(next - j)));
  }

  return result;
};

// TODO: Improve performance
