/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function (nums) {
  if (nums.length === 0) return [];
  if (nums.length === 1) return [`${nums[0]}`];

  const ranges = [];
  let range = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    const prev = nums[i - 1];
    const curr = nums[i];

    if (curr === prev + 1) {
      // still in this range so can continue, unless it's the last
      // item in which case we need to add it to the range
      if (i === nums.length - 1) {
        range.push(nums[i]);
      }

      continue;
    } else {
      // we no longer are in the range so the prev value is the final range entry
      range.push(prev);
      ranges.push([...range]);
      range = [nums[i]];
    }
  }

  ranges.push([...range]);

  return ranges.map(([s, e]) => (Number.isInteger(e) && e !== s ? `${s}->${e}` : `${s}`));
};
