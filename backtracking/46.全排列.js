/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const output = Array.from(nums);
  const res = [];

  backTrack(res, nums.length, 0, output);

  return res;
};
const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};
const backTrack = (res, n, first, output) => {
  if (first === n) {
    res.push(Array.from(output));
  }
  for (let i = first; i < n; i++) {
    swap(output, i, first);
    backTrack(res, n, first + 1, output);
    swap(output, i, first);
  }
}
// @lc code=end

