/**
 * @param {number[]} nums
 * @return {number[]}
 */
const decompressRLElist = function (nums) {
  const output = [];

  for (let i = 0; i < nums.length; i += 2) {
    const [freq, val] = [nums[i], nums[i + 1]];
    output.push(...Array(freq).fill(val));
  }

  return output;
};
