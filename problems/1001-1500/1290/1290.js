/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = function (head) {
  const digits = [];

  let current = head;

  while (current) {
    digits.unshift(current.val);
    current = current.next;
  }

  return digits.reduce((total, digit, i) => total + digit * 2 ** i, 0);
};
