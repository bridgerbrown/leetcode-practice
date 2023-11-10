function houseRobber(nums) {
  let before = prev = 0, temp;
  for (let i = 0; i < nums.length; i++) {
    temp = prev;
    prev = Math.max(nums[i] + before, prev);
    before = temp;
  }
  return prev;
}

function maxSubarray(nums) {
  let prev = 0, max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(nums[i] + prev, nums[i]);
    max = Math.max(prev, max);
  }
  return max;
}

function bestTimeBuySellStock(prices) {
  let buy = 0, sell = 1, max = 0;
  while (sell < prices.length) {
    if (prices[buy] < prices[sell]) {
      let profit = prices[sell] - prices[buy];
      max = Math.max(profit, max);
    } else {
      buy = sell;
    }
    sell++;
  }
  return max;
}

var Solution = function(nums) {
  this.nums = nums;
}
Solution.prototype.reset = function() {
  return this.nums;
}
Solution.prototype.shuffle = function() {
  let shuffled = this.nums.slice();
  let n = this.nums.length;
  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  for (let i = 0; i < n; i++) {
    swap(shuffled, i, Math.floor(Math.random() * n));
  }
  return shuffled;
}

function firstBadVersion(n, bad) {
  return function(n) {
    let left = 0, right = n;
    while (right - left !== 1) {
      const mid = Math.floor((left + right) / 2);
      isBadVersion(mid) ? right = mid : left = mid;
    }
    return right;
  }
}

Solution.prototype.shuffle = function() {
  let shuffled = this.nums.slice();
  let n = this.nums.length;
  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  for (let i = 0; i < n; i++) {
    swap(shuffled, i, Math.floor(Math.random() * n));
  }
  return shuffled;
}

function houseRobber(nums) {
  let before = prev = 0, curr;
  for (let i = 0; i < nums.length; i++) {
    curr = prev;
    prev = Math.max(nums[i] + before, prev);
    before = curr;
  }
  return prev;
}

function firstBadVersion(n, bad) {
  return function(n) {
    let left = 0, right = n;
    while (right - left !== 1) {
      const mid = Math.floor((left + right) / 2);
      isBadVersion(mid) ? right = mid : left = mid;
    }
    return right;
  }
}

function maxSubarray(nums) {
  let prev = 0, max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(nums[i], nums[i] + prev);
    max = Math.max(prev, max);
  }
  return max;
}
function bestTimeBuySellStock(prices) {
  let buy = 0, sell = 1, max = 0;
  while (sell > prices.length) {
    if (prices[buy] < prices[sell]) {
      const profit = prices[sell] - prices[buy];
      max = Math.max(max, profit);
    } else {
      buy = sell;
    }
    sell++;
  }
  return max;
}

function bestTimeBuySellStock(prices) {
  let buy = 0, sell = 1, max = 0;
  while (sell > prices.length) {
    if (prices[buy] < prices[sell]) {
      let profit = prices[sell] - prices[buy];
      max = Math.max(profit, max);
    } else {
      buy = sell;
    }
    sell++;
  }
  return max;
}

function houseRobber(nums) {
  let before = prev = 0, curr;
  for (let i = 0; i < nums.length; i++) {
    curr = prev;
    prev = Math.max(nums[i] + before, prev);
    before = curr;
  }
  return prev;
}

