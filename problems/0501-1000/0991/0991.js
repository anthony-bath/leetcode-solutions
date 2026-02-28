/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
const brokenCalc = function (startValue, target) {
  let count = 0;

  while (target > startValue) {
    if (target % 2 === 1) {
      target += 1;
    } else {
      target /= 2;
    }

    count++;
  }

  return count + (startValue - target);
};
