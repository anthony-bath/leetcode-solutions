/**
 * @param {number} num
 * @return {number}
 */
const splitNum = function (num) {
  const digits = getDigits(num).sort((a, b) => a - b);
  let [num1, num2] = ['', ''];
  let flag = true;

  for (const digit of digits) {
    if (flag) num1 += digit;
    else num2 += digit;

    flag = !flag;
  }

  return Number(num1) + Number(num2);
};

function getDigits(n) {
  const digits = [];

  while (n > 0) {
    const next = n % 10;
    digits.push(next);
    n = (n - next) / 10;
  }

  return digits;
}
