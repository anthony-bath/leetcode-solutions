/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = (head) => {
  let p1 = head;
  let p2 = head;

  let hasCycle = false;

  while (p1 && p1.next) {
    p1 = p1.next.next;
    p2 = p2.next;

    if (p1 === p2) {
      hasCycle = true;
      break;
    }
  }

  if (hasCycle) {
    p2 = head;

    while (p1 !== p2) {
      p1 = p1.next;
      p2 = p2.next;
    }

    return p1;
  }

  return null;
};

/*
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, 
return null.

There is a cycle in a linked list if there is some node in the list that can be reached again
by continuously following the next pointer. Internally, pos is used to denote the index of the
node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note
that pos is not passed as a parameter.

Do not modify the linked list.
*/
