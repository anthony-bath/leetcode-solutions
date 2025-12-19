/**
 * @param {number} n
 * @return {number}
 */
const clumsy = function (n) {
  const stack = [n];
  let operator = '*';

  for (let i = n - 1; i > 0; i--) {
    switch (operator) {
      case '*':
        stack.push(stack.pop() * i);
        operator = '/';
        break;

      case '/':
        stack.push(Math.trunc(stack.pop() / i));
        operator = '+';
        break;

      case '+':
        stack.push(i);
        operator = '-';
        break;

      case '-':
        stack.push(-i);
        operator = '*';
    }
  }

  return stack.reduce((sum, num) => sum + num, 0);
};
