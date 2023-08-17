/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * 1. 投票算法
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 1, res = nums[0];
  for (const num of nums) {
    if (num !== res) {
      --count;
      if (count === 0) {
        count = 1;
        res = num;
      }
    } else {
      count++;
    }
  }
  return res;
};

/**
 * 2. 排序
 * 如果将数组 nums 中的所有元素按照单调递增或单调递减的顺序排序，那么下标为 [n / 2]的一定是众数
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};
// @lc code=end

