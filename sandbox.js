function validPalindromStr(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false;
  }
  return true;
}

function houseRobber(nums) {
  let before = prev = 0, temp;
  for (let i = 0; i < nums.length; i++) {
    temp = prev;
    prev = Math.max(nums[i] + before, prev);
    before = temp;
  }
  return prev;
}

function mergeSortedArray(nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i], i--;
    } else {
      nums1[k] = nums2[j], j--;
    }
    k--;
  }
  while (j >= 0) {
    nums1[k] = nums2[j], j--, k--;
  }
  return nums1;
}

function maxSubarray(nums) {
  let prev = max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i]);
    max = Math.max(max, prev);
  }
  return max;
}

function moveZeroes(nums) {
  let diff = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      diff++
    } else {
      [nums[i - diff], nums[i]] = [nums[i], nums[i - diff]];
    }
  }
}

function romanToInteger(s) {
  const chars = {...};
  let count = 0;
  for (let i = 0; i < s.length; i++) {
   if (chars[s[i]] < chars[s[i + 1]]) {
      count -= chars[s[i]];
    } else {
      count += chars[s[i]];
    }
  }
  return count;
}

function reverseLL(head) {
  let prev = null, temp, curr = head;
  while (curr) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
}

function missingNumber(nums) {
  let sum = total = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    sum += nums[i];
    total += i + 1;
  }
  return total - sum;
}

function mergeSortedArray(nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i], i--;
    } else {
      nums1[k] = nums2[j], j--;
    }
    k--;
  }
  while (j >= 0) {
    nums1[k] = nums2[j], j--, k--;
  }
  return nums1;
}

var MinStack = function() {
  this.minStack = [];
  this.main = [];
}
MinStack.prototype.push = function(n) {
  this.main.push(n);
  if (n <= this.minStack[this.minStack.length - 1] || !this.minStack.length) {
    this.minStack.push(n);  
  } 
}
MinStack.prototype.pop = function() {
  let val = this.main.pop();
  if (this.minStack[this.minStack.length - 1] === val) {
  this.minStack.pop()
  }
}
MinStack.prototype.top = function() {
  return this.main[this.main.length - 1];
}
MinStack.prototype.top = function(n) {
  return this.minStack[this.minStack.length - 1];
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

function maxSubarray(nums) {
  let prev = 0, max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(nums[i] + prev, nums[i]);
    max = Math.max(prev, max);
  }
  return max;
}

function houseRobber(nums) {
  let prev = before = 0, temp;
  for (let i = 0; i < nums.length; i++) {
    temp = prev;
    prev = Math.max(nums[i] + before, prev);
    before = temp;
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

function moveZeroes(nums) {
  let diff = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      diff++;
    } else {
      [nums[i - diff], nums[i]] = [nums[i], nums[i - diff]];
    }
  }
}

function climbStairs(n) {
  if (n <= 2) return n;
  let first = 1, second = 2, temp;
  for (let i = 3; i < n; i++) {
    temp = first + second;
    first = second;
    second = temp;
  }
  return second;
}

function bestBuySellStock(prices) {
  let buy = max = 0, sell = 1;
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
}

function validPalindromStr(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false;
  }
  return true;
}
