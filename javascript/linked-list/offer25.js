/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var mergeTwoLists = function(l1, l2) {
  let newlist = new ListNode(); 
  let current = newlist;
  while(l1&& l2) {
    if(l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    }else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  if(l1) {
    current.next = l1;
  }
  if(l2) {
    current.next = l2; 
  }
  return newlist.next;
};
const l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);
const l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);
console.log(mergeTwoLists(l1, l2));

