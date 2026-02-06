/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
const rand10 = function () {
  while (true) {
    const x = rand7();
    const y = rand7();
    const mapped = (x - 1) * 7 + y;

    if (mapped <= 40) {
      return (mapped % 10) + 1;
    }
  }
};
