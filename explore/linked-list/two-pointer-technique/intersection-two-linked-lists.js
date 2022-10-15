/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
  let p1 = headA;
  let p2 = headB;

  let p1Swapped = false;
  let p2Swapped = false;

  while (p1 && p2) {
    if (p1 === p2) {
      return p1;
    }

    if (p1.next) {
      p1 = p1.next;
    } else if (!p1Swapped) {
      p1 = headB;
      p1Swapped = true;
    } else {
      return null;
    }

    if (p2.next) {
      p2 = p2.next;
    } else if (!p2Swapped) {
      p2 = headA;
      p2Swapped = true;
    } else {
      return null;
    }
  }

  return null;
};

/*
 Given the heads of two singly linked-lists headA and headB, return the
 node at which the two lists intersect. If the two linked lists have no
 intersection at all, return null.

 -----------------------------------------------------------------------
 Explanation
 -----------------------------------------------------------------------

 Assuming there is an intersection, list 1 is m steps away from the 
 intersecting node and then x steps away from the end. List 2 is n steps
 away from the intersection node and then also x steps away from the end
 since the list has intersected at that point. Therefore, by iterating
 two pointers through each their respective list and then swapping that
 pointer to the other, both will have taken m + n + x steps and arrive
 at the insecting node.
*/
