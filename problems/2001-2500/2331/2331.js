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
const evaluateTree = function (root) {
  const { val } = root;

  switch (val) {
    case 0:
      return false;
    case 1:
      return true;
    case 2:
      return evaluateTree(root.left) || evaluateTree(root.right);
    case 3:
      return evaluateTree(root.left) && evaluateTree(root.right);
  }
};
