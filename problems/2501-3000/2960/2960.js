const { max } = Math;

/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
const countTestedDevices = function (batteryPercentages) {
  let count = 0;

  for (const device of batteryPercentages) {
    const actual = max(0, device - count);

    if (actual > 0) {
      count += 1;
    }
  }

  return count;
};
