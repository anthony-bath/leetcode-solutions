/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
const sortJumbled = function (mapping, nums) {
  const data = nums.map((num, i) => {
    let mapped = num > 0 ? 0 : mapping[0];
    let n = num;
    let factor = 1;

    while (n > 0) {
      const d = n % 10;
      mapped += mapping[d] * factor;
      factor *= 10;
      n = (n - d) / 10;
    }

    return { num, i, mapped };
  });

  return data
    .sort((a, b) => {
      if (a.mapped === b.mapped) {
        return a.i - b.i;
      }

      return a.mapped - b.mapped;
    })
    .map(({ num }) => num);
};
