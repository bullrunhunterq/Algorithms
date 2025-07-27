/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 1. 左括号必须用相同类型的右括号闭合。
 * 2. 左括号必须以正确的顺序闭合。
 * 3. 每个右括号都有一个对应的相同类型的左括号。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2) { // s 长度必须是偶数
    return false;
  }

  const characterArr = [];
  const characterMatchedMap = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  for (let i = 0; i < s.length; i++) {
    const lastCharacter = characterArr[characterArr.length - 1];
    if (!characterMatchedMap[s[i]]) { // 左括号
      characterArr.push(s[i]);
    } else if (characterArr.length === 0 || characterMatchedMap[s[i]] !== lastCharacter) { // 遇到右括号，但是栈为空、或者匹配失败
      return false;
    } else { // 匹配成功
      characterArr.pop();
    }
  }
  return characterArr.length === 0;
};

isValid("()");
