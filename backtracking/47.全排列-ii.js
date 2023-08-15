/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const n = nums.length;
  const res = [];
  const visited = new Array(n).fill(false);
  nums.sort((a, b) => a - b);
  const backTrack = (index, output) => {
    if (index === n) {
      res.push(Array.from(output));
      return;
    }
    for (let i = 0; i < n; i++) {
      // 去重
      if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) {
        continue;
      }
      visited[i] = true;
      output.push(nums[i]);
      backTrack(index + 1, output);
      visited[i] = false;
      output.pop();
    }
  };

  backTrack(0, []);
  return res;
};
// @lc code=end
