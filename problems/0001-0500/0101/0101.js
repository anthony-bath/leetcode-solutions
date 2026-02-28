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
 * @return {boolean}
 */
const isSymmetric = function (root) {
  if (!root) return true;

  return isMirror(root.left, root.right);
};

function isMirror(a, b) {
  if (!a && !b) return true;
  if (!a || !b) return false;

  return a.val === b.val && isMirror(a.left, b.right) && isMirror(a.right, b.left);
}
