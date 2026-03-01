/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function (arr) {
  let [left, right] = [0, arr.length - 1];
  const seen = new Set();

  while (left <= right) {
    const l = arr[left];
    const r = arr[right];

    if (r === l * 2 || l === r * 2) return true;
    if (seen.has(r * 2) || seen.has(l * 2) || seen.has(r / 2) || seen.has(l / 2)) return true;

    seen.add(l);
    seen.add(r);
    left++;
    right--;
  }

  return false;
};
