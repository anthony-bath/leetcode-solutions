/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = function (nums) {
  return nums.sort((a, b) => {
    const aEven = a % 2 === 0;
    const bEven = b % 2 === 0;

    if (aEven && !bEven) {
      return -1;
    }

    if (bEven && !aEven) {
      return 1;
    }

    return 0;
  });
};
