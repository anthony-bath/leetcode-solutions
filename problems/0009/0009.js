/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;

  const digits = [];

  while (x) {
    digits.push(x % 10);
    x = Math.floor(x / 10);
  }

  let front = 0;
  let back = digits.length - 1;

  while (front !== back && front < back) {
    if (digits[front] !== digits[back]) {
      return false;
    }

    front++;
    back--;
  }

  return true;
};

console.log(isPalindrome(122231));
