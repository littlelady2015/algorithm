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
 * l1 || l2 为 空；
 * 最高位有进位；
 * 位数不相等；
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var addTwoNumbers = function(l1, l2) {
  let domHead = new ListNode(0);
  let cur = domHead;
  let tree1 = Object.assign({},l1);
  let tree2 = Object.assign({}, l2);
  let curry = 0; //进位
  while ((tree1 || tree2)) {
    let l1Val = tree1 ? tree1.val : 0;
    let l2Val = tree2 ? tree2.val : 0;
    let current = 0;
    current = (l1Val + l2Val + curry) % 10;
    curry = Math.floor((l1Val + l2Val + curry) / 10);
    cur.next = new ListNode(current);
    cur = cur.next;
    tree1 = tree1 ?  tree1.next : null;
    tree2 = tree2 ? tree2.next : null;
  }
  if(curry > 0) {
    cur.next = new ListNode(curry);
  }
  return domHead.next;
};

let tree1 = new ListNode(1);
// tree1.next = new ListNode(4);
// tree1.next.next = new ListNode(3);

let tree2 = new ListNode(9);
tree2.next = new ListNode(9);
// tree2.next.next = new ListNode(4);
console.log(addTwoNumbers(tree1, tree2));