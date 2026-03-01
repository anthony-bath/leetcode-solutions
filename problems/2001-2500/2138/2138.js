/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
  const output = [];

  for (let i = 0; i < s.length; i += k) {
    output.push(s.substring(i, i + k).padEnd(k, fill));
  }

  return output;
};
