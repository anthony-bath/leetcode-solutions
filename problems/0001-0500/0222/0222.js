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
const countNodes = function (root) {
  if (!root) return 0;

  function count(node) {
    let total = 1;

    if (node.left) {
      total += count(node.left);
    }

    if (node.right) {
      total += count(node.right);
    }

    return total;
  }

  return count(root);
};
