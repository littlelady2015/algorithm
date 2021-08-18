/* Trie 算法*/
function createCharAll() {
  let arr = [];
  for(i=0;i< 26; i++) {
    arr[i] = String.fromCharCode(97+i);
  }
  return arr;
}
class TrieNode {
  constructor(value) {
    this.data = value;
    this.children = new Array(26);
  } 
}
class Tree { 
  insert(str) {
    let root = new TrieNode('/');
    let p = root;
    for(let i = 0, len = str.length; i < len; i++) {
      let index = str[i].charCodeAt() - 97; 
      if(!p.children[index]) p.children[index] = new TrieNode(str[i]);
      p = p.children[index];
    }
    p.endingChar = true;
    return root;
  }
}

let a = new Tree();
console.info(a.insert('her'));
