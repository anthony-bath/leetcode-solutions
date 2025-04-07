/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function (nums1, nums2) {
  const result = [];

  outer: for (const num of nums1) {
    let i = nums2.indexOf(num);

    while (++i < nums2.length) {
      if (nums2[i] > num) {
        result.push(nums2[i]);
        continue outer;
      }
    }

    result.push(-1);
  }

  return result;
};

/* Monotonic Stack
var nextGreaterElement = function (nums1, nums2) {
  // Map to store next greater element for each number in nums2
  const nextGreater = new Map();
  // Stack to maintain decreasing order (monotonic stack)
  const stack = [];

  // Process nums2 to find next greater element for each number
  for (const num of nums2) {
    // While stack is not empty and current number is greater than top of stack
    while (stack.length > 0 && num > stack[stack.length - 1]) {
      // Pop from stack and map the popped element to current number
      nextGreater.set(stack.pop(), num);
    }
    // Push current number to stack
    stack.push(num);
  }

  // For remaining elements in stack, there is no next greater element
  while (stack.length > 0) {
    nextGreater.set(stack.pop(), -1);
  }

  // Build result array for nums1 using the map
  return nums1.map((num) => nextGreater.get(num));
};
*/
