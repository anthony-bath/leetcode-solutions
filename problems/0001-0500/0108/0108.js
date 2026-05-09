/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function (nums) {
  function dfs(left, right) {
    if (left === right) return null;

    const mid = (left + right) >> 1;
    const node = new TreeNode(nums[mid]);

    node.left = dfs(left, mid);
    node.right = dfs(mid + 1, right);

    return node;
  }

  return dfs(0, nums.length);
};
