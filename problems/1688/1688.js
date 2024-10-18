const { floor } = Math;

/**
 * @param {number} n
 * @return {number}
 */
const numberOfMatches = function (n) {
  let matches = 0;

  while (n > 1) {
    const half = floor(n / 2);

    matches += half;
    n -= half;
  }

  return matches;
};
