/*
 *给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true
* */
const validParentheses = (s) =>{
  var stack = [];
  for(var i = 0, len = s.length; i < len; i++) {
    if(stack.length) {
      var top = stack.length - 1;
      if(match(stack[top]) === s[i]) {
        stack.pop();
        continue;
      } 
      stack.push(s[i]);
    }else {
      stack.push(s[i]);
    }
  }
  if(!stack.length) return true;
  return false;
}
const match = (letter) => {
  switch (letter) {
    case '[' : return ']';
    case '{' : return '}';
    case '(' : return ')';
  }
}
document.write(validParentheses('[()]'));
