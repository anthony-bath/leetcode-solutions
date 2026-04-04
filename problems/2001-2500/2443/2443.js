/**
 * @param {number} num
 * @return {boolean}
 */
const sumOfNumberAndReverse = function (num) {
  for (let x = 0; x <= num; x++) {
    if (x + reverse(x) === num) {
      return true;
    }
  }

  return false;
};

function reverse(num) {
  let rev = 0;

  while (num > 0) {
    const next = num % 10;
    rev = rev * 10 + next;
    num = (num - next) / 10;
  }

  return rev;
}
