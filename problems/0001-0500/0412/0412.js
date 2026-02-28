/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
  const output = [];

  for (let i = 1; i <= n; i++) {
    if (i < 3) {
      output.push(`${i}`);
      continue;
    }

    let value = '';

    if (i % 3 === 0) {
      value += 'Fizz';
    }

    if (i % 5 === 0) {
      value += 'Buzz';
    }

    if (!value) {
      value = `${i}`;
    }

    output.push(value);
  }

  return output;
};
