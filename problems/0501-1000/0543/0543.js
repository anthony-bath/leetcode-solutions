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
const diameterOfBinaryTree = function (root) {
  let best = 0;

  function height(node) {
    if (!node) return 0;

    const left = height(node.left);
    const right = height(node.right);

    best = Math.max(best, left + right);

    return 1 + Math.max(left, right);
  }

  height(root);

  return best;
};
