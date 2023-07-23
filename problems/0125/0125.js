/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  s = s.replaceAll(/[^A-Z0-9]/gi, '').toLowerCase();
  let l = 0,
    r = s.length - 1;

  while (l < r) {
    if (s[l] !== s[r]) return false;

    l++;
    r--;
  }

  return true;
};
