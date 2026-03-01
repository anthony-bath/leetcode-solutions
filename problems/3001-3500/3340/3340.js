/**
 * @param {string} num
 * @return {boolean}
 */
const isBalanced = function (num) {
  let even = 0;
  let odd = 0;

  for (let i = 0; i < num.length; i++) {
    const digit = Number(num[i]);

    if (i % 2 === 0) {
      even += digit;
    } else {
      odd += digit;
    }
  }

  return even === odd;
};
