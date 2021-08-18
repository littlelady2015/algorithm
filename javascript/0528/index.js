let node1 = document.querySelector('.node1');
let node2 = document.querySelector('.node2');

function exChangeNode1() {
  let pNode1 = node1.parentNode;
  let pNode2 = node2.parentNode;
  let pNode1Copy = pNode1.cloneNode(true);
  pNode2.replaceChild(pNode1Copy, node2);
  pNode1.replaceChild(node2, node1);
}

function exChangeNode2() {
  let pNode1 = node1.parentNode;
  let pNode2 = node2.parentNode;
  let nextNode1 = node1.nextSibling;
  pNode2.replaceChild(node1, node2); 
  if(nextNode1) pNode1.insertBefore(node2 ,nextNode1);
  pNode1.append(node2);
}
function exChangeNode3() {
  let pNode1 = node1.parentNode;
  let nextNode1 = node1.nextSibling();
  let pNode2 = node2.parentNode;
  pNode2.insertBefore(node1, node2);
  if(pNode1) pNode1.insertBefore(node2, nextNode1);
  else pNode1.append(node2);
}

function exChangeNode4() {
  // 遍历父节点1 遇到目标节点 重新赋值 html片段填充父节点1
  // 遍历父节点2 遇到目标节点 重新赋值 html片段填充父节点2
}
exChangeNode4();

