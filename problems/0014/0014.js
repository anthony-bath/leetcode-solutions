/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  if (strs.some((str) => str.length === 0)) return '';

  const prefix = [];

  let index = 0;

  while (true) {
    if (strs.some((str) => str.length <= index)) break;

    if (strs.every((str) => str[index] === strs[0][index])) {
      prefix.push(strs[0][index]);
      index++;
    } else {
      break;
    }
  }

  return prefix.join('');
};
