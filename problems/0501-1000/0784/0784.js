/**
 * @param {string} s
 * @return {string[]}
 */
const letterCasePermutation = function (s) {
  const result = [];

  function dfs(i, str) {
    if (i === s.length) {
      result.push(str);
      return;
    }

    const char = s[i];

    if (/\d/.test(char)) {
      dfs(i + 1, `${str}${char}`);
    } else {
      dfs(i + 1, `${str}${char.toUpperCase()}`);
      dfs(i + 1, `${str}${char.toLowerCase()}`);
    }
  }

  dfs(0, '');

  return result;
};
