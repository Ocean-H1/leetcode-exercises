/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/**
 * 1. 双指针遍历
 * @TimeCpx O(n)
 * @SpaceCpx O(1)
 */
var removeElement = function (nums, val) {
  const n = nums.length;
  let left = 0;
  for (let right = 0; right < n; right++) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left++;
    }
  }
  return left;
};

/**
 * 2. 双指针 优化
 * 从两边向中间遍历
 * @TimeCpx O(n)
 * @SpaceCpx O(1)
 */
var removeElement = function (nums, val) {
  let left = 0, right = nums.length;
  while (left < right) {
    if (nums[left] === val) {
      nums[left] = nums[right - 1];
      right--;
    } else {
      left++;
    }
  }
  return left;
}
// @lc code=end

