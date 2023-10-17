/*
#1: Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
*/

var climbStairs = function(n) {
  if (n <= 2) return n;
  let first = 1;
  let second = 2;
  let current;

  for (let i = 3; i <= n; i++) {
    current = first + second;
    first = second;
    second = current;
  }
  return current; 
}

/*
#2: Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a 
different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
*/

var maxProfit = function (prices) {
  let buy = 0;
  let sell = 1;
  let max = 0;
  while (sell < prices.length) {
    if (prices[buy] < prices[sell]) {
      let profit = prices[sell] - prices[buy];
      max = Math.max(max, profit);
    } else {
      buy = sell;
    }
    sell++;
  }
  return max;
};

/*
#3: Maximum Subarray

Given an integer array nums, find the subarray with the largest sum, and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
*/

var maxSubArray = function(nums) {
  let prev = 0;
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i]);
    max = Math.max(max, prev);
  }
  return max;
};

/*
#4: House Robber

You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed, the only constraint stopping you from 
robbing each of them is that adjacent houses have security systems connected and it will 
automatically contact the police if two adjacent houses were broken into on the same night.
Given an integer array nums representing the amount of money of each house, return the maximum
amount of money you can rob tonight without alerting the police.

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
*/

var rob = function(nums) {
  let prev = 0;
  let before = 0;

  for (let i = 0; i < nums.length; i++) {
    let temp = prev;
    prev = Math.max(nums[i] + before, prev);
    before = temp;
  }

  return prev;
};
