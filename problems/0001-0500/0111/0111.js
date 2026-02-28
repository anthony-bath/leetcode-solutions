/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const { min } = Math;

/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = function (root) {
  if (!root) return 0;

  if (!root.left && !root.right) return 1;

  if (!root.left) return minDepth(root.right) + 1;

  if (!root.right) return minDepth(root.left) + 1;

  return min(minDepth(root.left), minDepth(root.right)) + 1;
};

/**
 * @param {TreeNode} root
 * @return {number}
 * Poor runtime performance but excellent memory usage.
 */
const minDepthIterative = function (root) {
  if (!root) return 0;

  const stack = [{ node: root, depth: 1 }];
  let minDepth = Infinity;

  while (stack.length) {
    const { node, depth } = stack.pop();

    if (!node.left && !node.right) {
      minDepth = Math.min(minDepth, depth);
    }

    if (node.left) {
      stack.push({ node: node.left, depth: depth + 1 });
    }

    if (node.right) {
      stack.push({ node: node.right, depth: depth + 1 });
    }
  }

  return minDepth;
};
