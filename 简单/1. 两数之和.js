/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。
 * 
 * 你可以按任意顺序返回答案。
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // 题解一
    // 方法: 两次for循环，遍历数组，然后遍历当前元素后面的数，找是否存在
    // 时间复杂度: n + n-1 + n-2 .... 1也就是n(n+1)/2 复杂度为n的平方
    // 空间复杂度: 1
    // let result = [];
    // for (let i = 0; i < nums.length; ++i) {
    //     for (let j = i + 1; j < nums.length; ++j) {
    //         if (nums[j] + nums[i] === target) {
    //             return [i, j]
    //         }
    //     }
    // }

    // 题解二
    // 方法: 创建一个哈希表(查找快，不需要循环)，遍历数组，如果哈希表中存在当前项的补数，返回，不存在则在哈希表中存入当前项及其对应索引。
    // 时间复杂度: N
    // 空间复杂度: N
    const hashMap = {};
    for (let i = 0; i < nums.length; ++i) {
        if (hashMap[target - nums[i]] !== undefined) {
            return [hashMap[target - nums[i]], i];
        } else {
            hashMap[nums[i]] = i;
        }
    }
};

twoSum([2, 7, 11, 15], 9); // [0, 1]
twoSum([3, 2, 4], 6); // [1, 2]
twoSum([3, 3], 6); // [0, 1]
