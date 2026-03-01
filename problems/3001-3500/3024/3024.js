const lookup = { 1: 'equilateral', 2: 'isosceles', 3: 'scalene' };

/**
 * @param {number[]} nums
 * @return {string}
 */
const triangleType = function (nums) {
  const [a, b, c] = nums;

  if (a + b <= c || a + c <= b || b + c <= a) {
    return 'none';
  }

  return lookup[new Set(nums).size];
};
