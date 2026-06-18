/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reversePrefix = (s, k) => {
  let result = '';
  for (let i = k - 1; i >= 0; i--) result += s[i];
  return result + s.slice(k);
};
