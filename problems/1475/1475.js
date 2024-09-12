/**
 * @param {number[]} prices
 * @return {number[]}
 */
const finalPrices = function (prices) {
  const output = [];
  const stack = [];

  for (let i = prices.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] > prices[i]) {
      stack.pop();
    }

    output[i] = stack.length === 0 ? prices[i] : prices[i] - stack[stack.length - 1];
    stack.push(prices[i]);
  }

  return output;
};

// Monotonic Stack
// https://labuladong.gitbook.io/algo-en/ii.-data-structure/monotonicstack

// 1. We use a monotonic stack to efficiently find the next smaller element.
// 2. The stack maintains a decreasing order of prices from bottom to top.
// 3. We iterate through the prices array from right to left:
//    - Pop elements from the stack that are greater than the current price.
//    - The top of the stack (if not empty) is the next smaller or equal price.
//    - Push the current price onto the stack.
// 4. This approach allows us to find discounts in O(n) time complexity,
//    as each element is pushed and popped at most once.

// Time Complexity: O(n), where n is the number of prices
// Space Complexity: O(n) in the worst case, when prices are in ascending order
