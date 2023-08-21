/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * 1. 暴力法 js运行似乎会超时
 * @param {number[]} prices
 * @return {number}
 * @TimeCpx O(n^2)
 * @SpaceCpx O(1)
 */
var maxProfit = function (prices) {
  let maxPft = 0;
  const n = prices.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let profit = prices[j] - prices[i];
      if (profit > maxPft) {
        maxPft = profit;
      }
    }
  }
  return maxPft;
};
/**
 * 2. 一次遍历
 * 要获得最大利润：我们可以假设自己在历史最低点买进，维护一个minPrice(第i天出售之前可以买入的最低价)，然后遍历算出第i天的利润即prices[i] - minPrice
 * @param {number[]} prices
 * @return {number}
 * @TimeCpx O(n)
 * @SpaceCpx O(1)
 */
var maxProfit = function (prices) {
  let minPrice = Number.MAX_VALUE;
  let maxPft = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxPft) {
      maxPft = prices[i] - minPrice;
    }
  }
  return maxPft;
};
/**
 * 3. 动态规划
 * dp[i][0] 表示第i天持有股票所得最多现金, dp[i][1] 表示第i天不持有股票所得最多现金
 * 递推公式：dp[i][0] = Max(dp[i-1][0], -price[i]) , dp[i][1] = Max(dp[i-1][1], price[i]+dp[i-1][0])
 * @param {number[]} prices
 * @return {number}
 * @TimeCpx O(n)
 * @SpaceCpx O(1)
 */
var maxProfit = function (prices) {
  const len = prices.length;
  const dp = new Array(len).fill([0, 0]);
  // 初始化第0天的情况
  dp[0] = [-prices[0], 0];

  for (let i = 1; i < len; i++) {
    dp[i] = [
      Math.max(dp[i - 1][0], -prices[i]),
      Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0])
    ];
  }
  // 根据题意 第i天不持有股票状态所的金钱一定比持有状态多
  return dp[len - 1][1];
}
// @lc code=end

