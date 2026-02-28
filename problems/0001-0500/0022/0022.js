/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  const combos = [];

  function dfs(left, right, combo) {
    if (combo.length === n * 2) {
      combos.push(combo);
      return;
    }

    if (left < n) {
      dfs(left + 1, right, `${combo}(`);
    }

    if (right < left) {
      dfs(left, right + 1, `${combo})`);
    }
  }

  dfs(0, 0, '');

  return combos;
};
