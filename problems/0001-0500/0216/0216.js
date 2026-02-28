/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = function (k, n) {
  const paths = [];
  const path = [];

  function dfs(start, remainingK, remainingN) {
    if (remainingK === 0 && remainingN === 0) {
      paths.push([...path]);
      return;
    }

    if (remainingK === 0 && remainingN !== 0) return;

    for (let x = start; x <= 9; x++) {
      path.push(x);
      dfs(x + 1, remainingK - 1, remainingN - x);
      path.pop();
    }
  }

  dfs(1, k, n);
  return paths;
};
