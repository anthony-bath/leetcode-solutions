const vowelExpr = new RegExp('[aeiou]', 'gi');

/**
 * @param {string} s
 * @return {boolean}
 */
const halvesAreAlike = function (s) {
  const [left, right] = [s.substring(0, s.length / 2), s.substring(s.length / 2)];
  return left.match(vowelExpr)?.length == right.match(vowelExpr)?.length;
};
