/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  const newHead = new ListNode(0, head);

  let p1 = newHead;

  for (let i = 0; i < n; i++) {
    p1 = p1.next;
  }

  let p2 = newHead;

  while (p1.next) {
    p1 = p1.next;
    p2 = p2.next;
  }

  p2.next = p2.next.next;

  return newHead.next;
};

/*
Given the head of a linked list, remove the nth node from the end 
of the list and return its head.
*/
