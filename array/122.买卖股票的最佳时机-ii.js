/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * 1. 贪心
 * @param {number[]} prices
 * @return {number}
 * @TimeCpx O(n)
 * @SpaceCpx O(1)
 */
var maxProfit = function (prices) {
  const n = prices.length;
  let ans = 0;

  for (let i = 1; i < n; i++) {
    ans += Math.max(0, prices[i] - prices[i - 1]);
  }
  return ans;
};
/**
 * 2. 动态规划
 * @param {number[]} prices
 * @return {number}
 * @TimeCpx O(n)
 * @SpaceCpx O(n)
 */
var maxProfit = function (prices) {
  const n = prices.length;
  const dp = new Array(n).fill(0).map(() => new Array(2).fill(0));
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]);
  }
  return dp[n - 1][0];
};
/**
 * 3. 动态规划 -（优化空间）
 * @param {number[]} prices
 * @return {number}
 * @TimeCpx O(n)
 * @SpaceCpx O(1)
 */
var maxProfit = function (prices) {
  const n = prices.length;
  dp0 = 0;
  dp1 = -prices[0];
  for (let i = 1; i < n; i++) {
    newDp0 = Math.max(dp0, dp1 + prices[i]);
    newDp1 = Math.max(dp0 - prices[i], dp1);
    dp0 = newDp0;
    dp1 = newDp1;
  }
  return dp0;
};
// @lc code=end

