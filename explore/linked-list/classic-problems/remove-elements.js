/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = (head, val) => {
  let dummyHead = new ListNode(0, head);

  let current = head;
  let previous = dummyHead;

  while (current) {
    if (current.val === val) {
      previous.next = current.next;
      current = current.next;
    } else {
      previous = previous.next;
      current = current.next;
    }
  }

  return dummyHead.next;
};
