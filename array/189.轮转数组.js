/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * 1. 模拟一个队列 执行k次出队和入队操作
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * @TimeCpx O(n^2)  Array.unshift的时间复杂度是O(n)
 * @SpaceCpx O(1)
 */
var rotate = function (nums, k) {
  while (k--) {
    nums.unshift(nums.pop());
  }
};
/**
 * 2. 数组翻转
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * @TimeCpx O(n)
 * @SpaceCpx O(1)
 */
var rotate = function (nums, k) {
  k %= nums.length;
  const reverse = (start, end) => {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  };

  // 1. 整体翻转
  reverse(0, nums.length - 1);
  // 2. 翻转[0, k-1]
  reverse(0, k - 1);
  // 3. 翻转[k, nums.length -1]
  reverse(k, nums.length - 1);
};
/**
 * 3. 环状替换
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * @TimeCpx O(n)
 * @SpaceCpx O(1)
 */
var rotate = function (nums, k) {
  const n = nums.length;
  k = k % n;
  // 求最大公约数
  const gcd = (x, y) => y ? gcd(y, x % y) : x;
  // 需要的遍历次数
  let count = gcd(k, n);

  for (let start = 0; start < count; ++start) {
    let current = start;
    let prev = nums[start];
    do {
      const next = (current + k) % n;
      const temp = nums[next];
      nums[next] = prev;
      prev = temp;
      current = next;
    } while (start !== current);
  }

}
// @lc code=end

