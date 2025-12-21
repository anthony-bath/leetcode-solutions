/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortByReflection = function (nums) {
  const reflection = new Map(nums.map((num) => [num, getBinaryReflection(num)]));

  return nums.sort((a, b) => {
    const refA = reflection.get(a);
    const refB = reflection.get(b);

    return refA === refB ? a - b : refA - refB;
  });
};

const getBinaryReflection = (num) => {
  let result = 0;

  while (num > 0) {
    result = (result << 1) | (num & 1);
    num >>= 1;
  }

  return result;
};
