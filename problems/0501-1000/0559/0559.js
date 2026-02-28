/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val === undefined ? null : val;
 *    this.children = children === undefined ? null : children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
const maxDepth = function (root) {
  if (!root) return 0;
  let max = 0;

  for (const child of root.children) {
    max = Math.max(max, maxDepth(child));
  }

  return 1 + max;
};
