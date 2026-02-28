/**
 * @param {number} n
 * @return {number}
 */
const findNthDigit = function (n) {
  let i = 0;
  let running = 0;

  while (running < n) {
    running += count(i);
    i += 1;
  }

  const min = 10 ** (i - 1);
  const max = 10 ** i - 1;
  running -= count(i - 1);

  const target = min + Math.floor((n - running - 1) / i);
  const targetRunning = running + (target - min) * i;
  const digits = `${target}`.split('');

  return Number(digits[n - targetRunning - 1]);
};

function count(i) {
  return 9 * Math.pow(10, i) * (i + 1);
}
