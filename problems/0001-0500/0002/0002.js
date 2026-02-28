/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  const n1 = [l1.val];
  let curr = l1;

  while (curr.next) {
    curr = curr.next;
    n1.push(curr.val);
  }

  const n2 = [l2.val];
  curr = l2;

  while (curr.next) {
    curr = curr.next;
    n2.push(curr.val);
  }

  let result = BigInt(n1.reverse().join('')) + BigInt(n2.reverse().join(''));

  const digits = [];

  while (result > 0n) {
    let digit = result % 10n;
    digits.push(digit);
    result = result / 10n;
  }

  const output = new ListNode(digits[0]);
  curr = output;

  for (let i = 1; i < digits.length; i++) {
    curr.next = new ListNode(digits[i]);
    curr = curr.next;
  }

  return output;
};
