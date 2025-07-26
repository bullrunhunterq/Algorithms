/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * 示例 1：
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 * 
 * 示例 2：
 * 输入：strs = ["dog","racecar","car"]
 * 输出：""
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // 题解
    // 方法：遍历每一个str，比较第M个字符是否相等
    // 复杂度：O{N * M}：意味着算法的时间复杂度和这两个输入规模的乘积成正比。也就是说，当 N 或者 M 增大时，算法的运行时间会以二者乘积的速度变长

    if (strs.length === 0) {
        return '';
    }
    let prefix = '';
    for (let i = 0; i < strs[0].length; i++) {
        let j = 0
        for (; j < strs.length - 1; j++) {
            var curChar = strs[j][i];
            var nextChar = strs[j + 1][i];
            if (curChar !== nextChar) {
                return prefix;
            }
        }
        prefix += strs[j][i];
    }
    return prefix;
};

console.log(longestCommonPrefix(["",""]));