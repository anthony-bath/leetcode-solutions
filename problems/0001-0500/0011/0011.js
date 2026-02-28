/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let left = 0;
  let right = height.length;
  let maxArea = -Infinity;

  while (left < right) {
    const minHeight = height[left] < height[right] ? height[left] : height[right];
    const area = (right - left) * minHeight;

    if (area > maxArea) {
      maxArea = area;
    }

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};
