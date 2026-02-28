const { max } = Math;

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function (num1, num2) {
  num1 = num1.split('').reverse();
  num2 = num2.split('').reverse();

  let result = '';
  const len = max(num1.length, num2.length);
  let carry = 0;

  for (let i = 0; i < len; i++) {
    let sum;

    if (!num1[i]) {
      sum = Number(num2[i]) + carry;
    } else if (!num2[i]) {
      sum = Number(num1[i]) + carry;
    } else {
      sum = Number(num1[i]) + Number(num2[i]) + carry;
    }

    result = `${sum % 10}${result}`;
    carry = sum >= 10 ? 1 : 0;
  }

  if (carry) {
    result = `1${result}`;
  }

  return result;
};
