const { floor } = Math;

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = function (left, right) {
  function isSelfDividing(num) {
    let n = num;

    while (n > 0) {
      if (num % (n % 10) !== 0) return false;
      n = floor(n / 10);
    }

    return true;
  }

  const output = [];

  for (let curr = left; curr <= right; curr++) {
    if (isSelfDividing(curr)) {
      output.push(curr);
    }
  }

  return output;
};
