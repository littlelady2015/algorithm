class TreeNode {
  constructor(val) {
    this.val = val;
    this.isWord = false;
    this.children = {};
  }
}
/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = new TreeNode();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let current = this.root;
  for (let i = 0, len = word.length; i < len; i++) {
    if (!current.children[word[i]]) {
      current.children[word[i]] = new TreeNode(word[i]);
    }
    current = current.children[word[i]];
    if (i === len - 1) {
      current.isWord = true;
    }
  }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let current = this.root;
  let flag = false;
  let i =0;
  for (len = word.length; i < len; i++) {
    if (current.children[word[i]]) {
      current = current.children[word[i]];
    } else {
      break;
    }
  }
  if (current.isWord && i === len) {
    flag = true;
  }
  return flag;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let current = this.root;
  let flag = false;
  for (let i = 0, len = prefix.length; i < len; i++) {
    if (current.children[prefix[i]]) {
      current = current.children[prefix[i]];
    } else {
      break;
    }
    if (i === len - 1) {
      flag = true;
    }
  }
  return flag;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
 const trie = new Trie();
 const a = trie.insert("hello");
 const a1 = trie.search("hell");   // 返回 True
 const a2 = trie.search("helloa");     // 返回 False
 const a3 = trie.search("hello"); // 返回 True 
 
 const a5 = trie.startsWith("hell");
 const a6 = trie.startsWith("helloa");     // 返回 True
 const a7 = trie.startsWith("hello");     // 返回 True
 const arr = [a, a1, a2, a3,a5,a6,a7];
for(let i = 0; i < arr.length; i++) {
  console.log(`a${i}`, arr[i]);
}
 [null,null,false,false,true,true,false,true]