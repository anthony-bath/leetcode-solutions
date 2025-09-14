const { floor } = Math;

/**
 * @param {number} num
 * @return {number}
 */
const countDigits = function (num) {
  let count = 0;
  let x = num;

  while (x > 0) {
    const digit = x % 10;
    x = floor(x / 10);

    if (num % digit === 0) {
      count++;
    }
  }

  return count;
};
