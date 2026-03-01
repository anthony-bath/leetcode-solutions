const sets = [new Set('abcdefghijklmnopqrstuvwxyz'.split('')), new Set('!@#$%^&*()'.split(''))];

/**
 * @param {string} s
 * @return {string}
 */
const reverseByType = function (s) {
  let res = s.split('');

  for (const set of sets) {
    let [left, right] = [0, s.length - 1];

    while (left < right) {
      while (left < right && !set.has(res[left])) left++;
      while (left < right && !set.has(res[right])) right--;

      if (left < right) {
        [res[right], res[left]] = [res[left], res[right]];
        left++;
        right--;
      }
    }
  }

  return res.join('');
};
