/**
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * 
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 例如，121 是回文，而 123 不是。
 * 不使用转成字符串然后颠倒的方法
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // 题解一
    // 方法：把当前数通过对10取余，得到各个位数；然后新数再每次*10加上当前位数得到新数；最后比较
    //      本来想着第一个循环能够得到各个位数，然后再循环各个位数看乘以10的x次方得到新数，再比较；后来发现10的x次方刚好就是上面循环的次数，把这两步的循环合一起了可以。
    // 复杂度：O(log10(x))，加入121，并不需要执行121次，每次除以10，最后一次执行为1，也就是x/10k次方 = 1，所以k = log10(x)，需要k次
    if (x < 0) {
        return false;
    }

    let newNumber = 0;
    let temp = x;
    // 取出各个位的值
    while (temp) {
        const curCharacter = temp % 10;
        newNumber = newNumber * 10 + curCharacter
        temp = Math.floor(temp / 10);
    }

    return newNumber === x;
};