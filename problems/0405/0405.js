const { floor, log, max } = Math;

function log16(n) {
  return max(0, floor(log(n) / log(16)));
}

/**
 * @param {number} num
 * @return {string}
 */
const toHex = function (num) {
  if (num < 0) {
    num = 2 ** 32 + num;
  }

  let result = '';
  let power = log16(num);

  while (power >= 0) {
    const factor = floor(num / 16 ** power);
    result += lookup[factor];
    num -= factor * 16 ** power;
    power--;
  }

  return result;
};

const lookup = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: 'a',
  11: 'b',
  12: 'c',
  13: 'd',
  14: 'e',
  15: 'f',
};
