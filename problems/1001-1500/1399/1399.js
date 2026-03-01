/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  if (n < 10) return n;

  const groups = new Map();

  const sumOfDigits = (num) => {
    let sum = 0;

    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }

    return sum;
  };

  for (let num = 1; num <= n; num++) {
    const sum = sumOfDigits(num);

    if (groups.has(sum)) {
      groups.set(sum, groups.get(sum) + 1);
    } else {
      groups.set(sum, 1);
    }
  }

  let [max, maxCount] = [0, 0];

  for (const size of groups.values()) {
    if (size > max) {
      max = size;
      maxCount = 1;
    } else if (size === max) {
      maxCount++;
    }
  }

  return maxCount;
};
