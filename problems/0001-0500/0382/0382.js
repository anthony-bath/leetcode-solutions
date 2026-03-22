/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class Solution {
  constructor(head) {
    this.head = head;
    this.values = [];
    let curr = this.head;

    while (curr) {
      this.values.push(curr.val);
      curr = curr.next;
    }
  }

  getRandom() {
    const pos = Math.floor(Math.random() * this.values.length);
    return this.values[pos];
  }
}
