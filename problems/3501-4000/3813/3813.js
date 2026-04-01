const { floor } = Math;

/**
 * @param {string} s
 * @return {number}
 */
const vowelConsonantScore = function (s) {
  const v = s.match(/[aeiou]/g)?.length ?? 0;
  const x = s.match(/[\s\d]/g)?.length ?? 0;
  const c = s.length - v - x;

  return c > 0 ? floor(v / c) : 0;
};
