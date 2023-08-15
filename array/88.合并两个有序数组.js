/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 1. 无脑插入再排序
/**
 * 使用了排序，直接套用快排的时间/空间复杂度计算
 * @TimeCpx O((m+n)log(m+n))
 * @SpaceCpx O(log(m+n))
 */
// var merge = function (nums1, m, nums2, n) {
//   nums1.splice(m, n, ...nums2);
//   nums1.sort((a, b) => a - b);
// };

// 2. 双指针(需要新开一个数组)
/**
 * @TimeCpx O(m+n)
 * @SpaceCpx O(m+n)
 */
// var merge = function (nums1, m, nums2, n) {
//   let p1 = 0, p2 = 0;
//   const sorted = new Array(m + n).fill(0);
//   let cur;
//   while (p1 < m || p2 < n) {
//     if (p1 === m) {
//       cur = nums2[p2++];
//     } else if (p2 === n) {
//       cur = nums1[p1++];
//     } else if (nums1[p1] < nums2[p2]) {
//       cur = nums1[p1++];
//     } else {
//       cur = nums2[p2++];
//     }
//     sorted[p1 + p2 - 1] = cur;
//   }
//   nums1.splice(0, m + n, ...sorted);
// };

// 3. 逆向双指针(原地操作)
/**
 * nums1后半部分是空的，所以不会存在取之前就覆盖的问题，直接从后往前遍历，思路和方法2一致
 * @TimeCpx O(m+n)
 * @SpaceCpx O(1)
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1, p2 = n - 1;
  let tail = m + n - 1;
  let cur;
  while (p1 >= 0 || p2 >= 0) {
    if (p1 === -1) {
      cur = nums2[p2--];
    } else if (p2 === -1) {
      cur = nums1[p1--];
    } else if (nums1[p1] > nums2[p2]) {
      cur = nums1[p1--];
    } else {
      cur = nums2[p2--];
    }
    nums1[tail--] = cur;
  }
}
// @lc code=end

