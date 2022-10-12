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
const middleNode = (head) => {
  let current = head;
  let middle = head;
  let move = true;

  while (current.next) {
    current = current.next;
    move = !move;

    if (!move) {
      middle = middle.next;
    }
  }

  return middle;
};
