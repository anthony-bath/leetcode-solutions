/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) {
    return null;
  }

  let head;
  let merged;
  let node;

  while (list1 || list2) {
    if (list1 && !list2) {
      node = new ListNode(list1.val);
      list1 = list1.next;
    } else if (list2 && !list1) {
      node = new ListNode(list2.val);
      list2 = list2.next;
    } else if (list1.val < list2.val) {
      node = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      node = new ListNode(list2.val);
      list2 = list2.next;
    }

    if (merged) {
      merged.next = node;
      merged = merged.next;
    } else {
      merged = node;
      head = merged;
    }
  }

  return head;
};
