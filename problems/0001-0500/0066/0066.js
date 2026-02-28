/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  let position = digits.length - 1;

  while (true) {
    const next = digits[position] + 1;

    if (next < 10) {
      digits[position] = next;
      break;
    } else {
      digits[position--] = 0;
    }

    if (position < 0) {
      digits.unshift(1);
      break;
    }
  }

  return digits;
};
