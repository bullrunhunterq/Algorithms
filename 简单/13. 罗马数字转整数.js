/**
 * 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
 *
 * 字符          数值
 *  I             1
 *  V             5
 *  X             10
 *  L             50
 *  C             100
 *  D             500
 *  M             1000
 * 例如， 罗马数字 2 写做 II ，即为两个并列的 1 。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。
 *
 * 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
 *
 * I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
 * X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
 * C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 * 给定一个罗马数字，将其转换成整数。
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  // 题解
  // 方法：比较当前值和下一位的值，如果当前值小于下位值，则减去当前值，否则加上当前值
  // 复杂度：O{N}

  const romanNumMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
  }

  let result = 0;
  for (let i = 0; i < s.length; ++i) {
      let curValue = romanNumMap[s[i]];
      const nextValue = romanNumMap[s[i + 1]];
      const isSpecial = s[i] === 'I' || s[i] === 'X' || s[i] === 'C'
      // 下面是吧前后两次换算成一次来做了。
      // 其实进一步理解，如果下一个数大，那么当前数执行减法、否则执行加法。这种好理解一些，不用额外去处理 i
      if (isSpecial && s[i + 1] && curValue < nextValue) {
          curValue = nextValue - curValue;
          i++;
      }
      result = result + curValue;
  }
  return result;
};