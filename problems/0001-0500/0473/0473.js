/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
  const total = matchsticks.reduce((sum, len) => sum + len, 0);

  if (total % 4 !== 0) {
    return false;
  }

  matchsticks.sort((a, b) => b - a);
  const sides = Array(4).fill(0);
  const target = total / 4;

  function dfs(index = 0) {
    if (index === matchsticks.length) {
      return true;
    }

    const seen = new Set();
    for (let i = 0; i < 4; i++) {
      if (seen.has(sides[i])) continue;

      if (sides[i] + matchsticks[index] <= target) {
        seen.add(sides[i]);
        sides[i] += matchsticks[index];

        if (dfs(index + 1)) {
          return true;
        }

        sides[i] -= matchsticks[index];
      }
    }

    return false;
  }

  return dfs();
};
