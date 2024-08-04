/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const getEncryptedString = function (s, k) {
  const pivot = k % s.length;
  return `${s.slice(pivot)}${s.slice(0, pivot)}`;
};
