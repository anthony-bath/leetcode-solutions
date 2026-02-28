/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) return head;

  let count = 1;
  let current = head;

  while (current.next) {
    count++;
    current = current.next;
  }

  const rotations = k % count;

  for (let i = 0; i < rotations; i++) {
    head = rotate(head);
  }

  return head;
};

function rotate(head) {
  let prev;
  let current = head;

  while (current.next) {
    prev = current;
    current = current.next;
  }

  // current is now tail and will become head
  // prev is now before tail and will become tail
  prev.next = null;
  current.next = head;

  return current;
}
