/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  if (!digits) return [];

  const options = new Map([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']],
  ]);

  const combos = [];

  function dfs(index, string) {
    for (const option of options.get(digits[index])) {
      const combo = `${string}${option}`;

      if (index === digits.length - 1) {
        combos.push(combo);
      } else {
        dfs(index + 1, combo);
      }
    }
  }

  dfs(0, '');

  return combos;
};
