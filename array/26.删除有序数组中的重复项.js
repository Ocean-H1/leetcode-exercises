/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * 1. 双指针
 * 由于nums是升序排列的，所以相同值下标一定连续
 * @param {number[]} nums
 * @return {number}
 * @TimeCpx O(n)
 * @SpaceCpx O(1)
 */
var removeDuplicates = function (nums) {
  const n = nums.length;
  // slow代表下一个元素要插入的位置  fast代表当前遍历的下标
  let slow = 1, fast = 1;
  while (fast < n) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow++] = nums[fast];
    }
    fast++;
  }
  return slow;
};
// @lc code=end

