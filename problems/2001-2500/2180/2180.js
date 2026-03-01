/**
 * @param {number} num
 * @return {number}
 */
const countEven = function (num) {
  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (digitSum(i) % 2 === 0) count++;
  }

  return count;
};

function digitSum(num) {
  let sum = 0;

  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
}
