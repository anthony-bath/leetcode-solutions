/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (temperatures) {
  const result = Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    const temp = temperatures[i];

    while (stack.length && temp > temperatures[stack.at(-1)]) {
      const j = stack.pop();
      result[j] = i - j;
    }

    stack.push(i);
  }

  return result;
};
