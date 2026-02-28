/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = function (root) {
  if (!root.left && !root.right) return 0;

  let sum = 0;

  function dfs(node, isLeft) {
    if (!node.left && !node.right && isLeft) {
      sum += node.val;
      return;
    }

    if (node.left) {
      dfs(node.left, true);
    }

    if (node.right) {
      dfs(node.right, false);
    }
  }

  dfs(root);

  return sum;
};
