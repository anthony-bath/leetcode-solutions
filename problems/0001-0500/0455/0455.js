/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function (g, s) {
  if (s.length === 0) return 0;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let [si, gi, count] = [0, 0, 0];

  while (gi < g.length && si < s.length) {
    if (g[gi] <= s[si]) {
      count++;
      gi++;
      si++;
    } else {
      si++;
    }
  }

  return count;
};
