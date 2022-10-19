/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
  if (!head || !head.next) {
    return true;
  }

  let fast = head;
  let backStart = head;
  let frontEnd = null;

  while (fast && fast.next) {
    fast = fast.next.next;
    frontEnd = backStart;
    backStart = backStart.next;
  }

  // odd node count if fast is defined so
  // back half begins on the next node
  if (fast) {
    backStart = backStart.next;
  }

  // terminate front half
  frontEnd.next = null;

  return compare(head, reverseList(backStart));
};

const compare = (list1, list2) => {
  while (list1 && list2) {
    if (list1.val !== list2.val) {
      return false;
    }

    list1 = list1.next;
    list2 = list2.next;
  }

  return true;
};

const reverseList = (head) => {
  if (!head || !head.next) {
    return head;
  }

  let current = head;
  let previous = null;
  let next = null;

  while (current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
};
