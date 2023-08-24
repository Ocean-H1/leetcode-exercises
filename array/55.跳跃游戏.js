/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * 1. 贪心
 * @param {number[]} nums
 * @return {boolean}
 * @TimeCpx O(n)
 * @SpaceCpx O(1)
 */
var canJump = function (nums) {
  const n = nums.length;
  let maxPos = 0;

  for (let i = 0; i < n; i++) {
    if (i <= maxPos) {
      maxPos = Math.max(maxPos, i + nums[i]);
      if (maxPos >= n - 1) {
        return true;
      }
    }
  }
  return false;
};
// @lc code=end

