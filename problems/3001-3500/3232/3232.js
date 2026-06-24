/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canAliceWin = function (nums) {
  let [singles, doubles] = [0, 0];

  for (const num of nums) {
    if (num < 10) {
      singles += num;
    } else {
      doubles += num;
    }
  }

  return singles !== doubles;
};
