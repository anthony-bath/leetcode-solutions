/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  if (s.length === 1) return;

  let low = 0;
  let high = s.length - 1;

  while (low < high) {
    [s[low], s[high]] = [s[high], s[low]];

    low++;
    high--;
  }
};
