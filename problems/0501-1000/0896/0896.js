const STATE = {
  INC: 0,
  DEC: 1,
  EQU: 2,
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = function (nums) {
  if (nums.length <= 2) return true;

  let state = nums[1] > nums[0] ? STATE.INC : nums[1] < nums[0] ? STATE.DEC : STATE.EQU;

  for (let i = 2; i < nums.length; i++) {
    switch (state) {
      case STATE.INC:
        if (nums[i] >= nums[i - 1]) continue;
        return false;
      case STATE.DEC:
        if (nums[i] <= nums[i - 1]) continue;
        return false;
      case STATE.EQU:
        if (nums[i] === nums[i - 1]) continue;

        if (nums[i] > nums[i - 1]) {
          state = STATE.INC;
        } else {
          state = STATE.DEC;
        }
    }
  }

  return true;
};
