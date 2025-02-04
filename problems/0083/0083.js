/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  if (!head || !head.next) return head;

  let current = head.next;
  let prev = head;

  while (current) {
    if (current.val === prev.val) {
      while (current && current.val === prev.val) {
        current = current.next;
      }

      prev.next = current;
      prev = current;
      current = current?.next;
    } else {
      prev = current;
      current = current.next;
    }
  }

  return head;
};
