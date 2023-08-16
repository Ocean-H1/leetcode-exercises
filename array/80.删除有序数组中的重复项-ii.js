/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * 1. 双指针
 * 此题条件变成了超过两次的元素只出现两次，实际上还是去重，但重复的标准变成了重复次数超过两次
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const n = nums.length;
  // 默认为1 即重复数不超过两次 2代表达到了两次重复，则后续这个值再出现重复就直接跳过
  let flag = 1;
  let left = 1, right = 1;
  while (right < n) {
    if (nums[right] === nums[right - 1]) {
      flag++;
      if (flag === 2) {
        nums[left++] = nums[right];
      }
    } else {
      flag = 1;
      nums[left++] = nums[right];
    }
    right++;
  }
  return left;
};
/**
 * 2. 双指针
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const n = nums.length;
  let slow = 2, fast = 2;
  while (fast < n) {
    if (nums[slow - 2] !== nums[fast]) {
      nums[slow++] = nums[fast];
    }
    fast++;
  }
  return slow;
}
// @lc code=end

