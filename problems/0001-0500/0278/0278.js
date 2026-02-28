/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let [low, high] = [0, n];

    while (low < high) {
      const mid = Math.floor((low + high) / 2);

      if (isBadVersion(mid)) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }

    return low;
  };
};
