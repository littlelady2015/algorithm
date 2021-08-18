var addTwoNumbers = function(l1, l2) {
  var p1 = l1
  var p2 = l2
  var carry = 0
  const dummy = new ListNode()
  var pointer = dummy
  while (p1 || p2 || carry) {
    const num1 = p1 ? p1.val : 0
    const num2 = p2 ? p2.val : 0
    const sum = num1 + num2 + carry
    if (sum > 9) {
      pointer.next = new ListNode(sum % 10)
      carry = 1
    } else {
      pointer.next = new ListNode(sum)
      carry = 0
    }
    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
    pointer = pointer.next
  }
  return dummy.next
};
var Node = function(val) {
  var node = {};
  node.val = val;
  node.next = null;
  return node;
}

var buildTestNode = function(arr) {
  var node = new Node(arr[0]);
  node.next = { val: arr[1], next: null};
  for(var i = 1, len =  arr.length; i < len; i++) {
    if(arr[i+1]) {
      var child = new Node(arr[i+1]);
      next.val = arr[i+1];
      next.node = child;
    }
    next = node.next;
  }
  return node;
}
// node建立的过程不对，next没有有效的指向
// console.log(buildTestNode([1,2,3]));
