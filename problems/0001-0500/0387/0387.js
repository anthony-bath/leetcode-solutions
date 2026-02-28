/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
  const counts = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    counts[s[i].charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (counts[s[i].charCodeAt(0) - 97] === 1) return i;
  }

  return -1;
};
