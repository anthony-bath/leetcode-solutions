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
const oddEvenList = (head) => {
  if (!head) {
    return null;
  }

  if (!head.next) {
    return head;
  }

  let [oddStart, oddEnd, evenStart, evenEnd] = [null, null, null, null];
  let steps = 1;
  let current = head;

  while (current) {
    if (steps % 2 === 1) {
      if (!oddStart) {
        oddStart = current;
      } else {
        oddEnd.next = current;
      }

      oddEnd = current;
    } else {
      if (!evenStart) {
        evenStart = current;
      } else {
        evenEnd.next = current;
      }

      evenEnd = current;
    }

    steps++;
    current = current.next;
  }

  oddEnd.next = evenStart;
  evenEnd.next = null;

  return head;
};
