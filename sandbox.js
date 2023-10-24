function climbStairs(n) {
  if (n <= 2) return n;
  let first = 1, second = 2, curr;
  for (let i = 3; i < n; i++) {
    curr = first + second;
    first = second;
    second = curr;
  }
  return curr;
}

function fizzBuzz(n) {
  const r = [];
  if (n < 1) return r;
  for (let i = 1; i < n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      r.push("FizzBuzz")
    } else if (i % 3 == 0) {
      r.push("Fizz")
    } else if (i % 5 == 0) {
      r.push("Buzz")
    } else {
      r.push(i.toString())
    }
  }
  return r;
}

function countPrimes(n) {
  const primes = [], count = 0;
  if (n <= 1) return count;
  for (let i = 2; i < n; i++) {
    if (primes[i] === undefined) {
      primes[i] = true, count++;
      for (let j = 2; j * i < n; j++) {
        primes[i * j] = false; 
      }
    } 
  }
  return count;
}

function maxSubarray(nums) {
  let prev = 0, max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(nums[i] + prev, nums[i]);
    max = Math.max(prev, max);
  }
  return max;
}

function climbStairs(n) {
  let first = 1, second = 2, curr;
  if (n <= 2) return n;
  for (let i = 3; i < n; i++) {
    curr = first + second, first = second, second = curr; 
  }
  return curr;
}

function validateBST(root) {
  if (!root) return true;
  const validate = (root, min, max) => {
    if (!root) return true;
    if ((min !== null && min >= root) || (max !== null && max <= root)) return false;
    validate(root.left, min, root), validate(root.right, root, max);
  }
  return validate(root, null, null);
}

var Solution = function(nums) {
  this.nums = nums;
}
Solution.prototype.reset = function() {
  return this.nums;
}
Solution.prototype.shuffle = function() {
  const shuffled = this.nums.slice();
  const n = this.nums.length;
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

function bestBuySellStock(prices) {
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

function houseRobber(nums) {
  let prev = before = 0;
  for (let i = 0; i < nums.length; i++) {
    let temp = prev;
    prev = Math.max(nums[i] + before, prev);
    before = temp; 
  }
  return prev;
}

function mergeSortedArr(nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = n + m - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i], i--;
    } else {
      nums1[k] = nums2[j], j--;
    }
    k--
  }
  while (j >= 0) nums1[k] = nums2[j], j--, k--;
  return nums1;
}

var MinStack = function() {
  this.minStack = [];
  this.container = [];
}
MinStack.prototype.push = function(n) {
  this.container.push(n);
  if (!this.minStack.length || n <= this.minStack[this.minStack.length - 1]) {
    this.minStack.push(n);
  }
}
MinStack.prototype.pop = function() {
  let val = this.container.pop();
  if (val === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
}
MinStack.prototype.top = function() {
  return this.container[this.container.length - 1]
}
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1]
}
