/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = (num) => {
  let steps = 0;

  while (num > 0) {
    if (num & 1) {
      num -= 1;
    } else {
      num >>= 1;
    }

    steps++;
  }

  return steps;
};

/* Explanation

& bitwise AND
>> right-shift

Using & with num and 1 will determine if the right-most bit is 1, indicating 
that num is odd if the result returned is 1, otherwise 0 will be returned
indicating that num is even.

If num is even, we can right-shift 1 bit to halve it.
*/
