const { floor, log } = Math;

/**
 * @param {number} n
 * @return {string}
 */
var concatHex36 = function (n) {
  const hexadecimal = toBase(n ** 2, 16);
  const hexatrigesimal = toBase(n ** 3, 36);

  return `${hexadecimal}${hexatrigesimal}`;
};

function toBase(x, b) {
  if (x === 0) return '0';

  let result = '';

  while (x > 0) {
    result = CHARSET[x % b] + result;
    x = floor(x / b);
  }

  return result;
}

const CHARSET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
