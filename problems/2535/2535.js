const { floor, abs } = Math;

/**
 * @param {number[]} nums
 * @return {number}
 */
const differenceOfSum = function (nums) {
  let elementSum = 0;
  let digitSum = 0;

  for (const num of nums) {
    elementSum += num;
    digitSum += sumDigits(num);
  }

  return abs(elementSum - digitSum);
};

function sumDigits(num) {
  let sum = 0;

  while (num > 0) {
    const digit = num % 10;
    num = floor(num / 10);
    sum += digit;
  }

  return sum;
}
