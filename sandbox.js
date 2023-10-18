function maxSubarray(nums) {
  const prev = 0, max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i]);
    max = Math.max(max, prev);
  }
  return max;
}

function bestStockProfit(prices) {
  let buy = 0, sell = 1, max = 0;
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

function countPrimes(n) {
  let count = 0, primes = [];
  if (n <= 1) return 0;
  for (let i = 2; i < n; i++) {
    if (primes[i] == undefined) {
      primes[i] = true;
      count++;
      for (let j = 2; j * i < n; j++) {
        primes[i * j] = false;
      }
    }
  }
  return count;
}

function climbStairs(n) {
  if (n <= 2) return n;
  let first = 1, second = 2, current;
  for (let i = 3; i <= n; i++) {
    current = first + second;
    first = second;
    second = current;
  }
  return current;
}

var MinStack = function() {
  this.minStack = [];
  this.main = [];
}
MinStack.prototype.push = function(n) {
  this.main.push(n);
  if (this.minStack.length === 0 || n <= this.minStack[this.minStack.length - 1]) {
    this.minStack.push(n);
  }
}
MinStack.prototype.pop = function(n) {
  this.main.pop(n);
  if (n == this.minStack[this.minStack.length - 1]) this.minStack.pop(n);
}
MinStack.prototype.top = function() {
  return this.main[this.main.length - 1];
}
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
}

function containsDuplicate(nums) {
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) {
      return true
    } else {
      set.add(num);
    }
  }
  return false;
}

function twoSum(nums, target) {
  const differences = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in differences) {
      return [i, differences[diff]];
    } else {
      differences[nums[i]] = i;
    }
  }
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

function fizzBuzz(n) {
  const results = [];
  if (n <= 0) return results;
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      results.push("FizzBuzz");
    } else if (i % 3) {
      results.push("Fizz");
    } else if (i % 5) {
      results.push("Buzz")
    } else {
      results.push(i.toString());
    }
  }
  return results;
}

var Solution = function(nums) {
  this.nums = nums;
}
Solution.prototype.reset = function() {
  return this.nums;
}
Solution.prototype.shuffle = function() {
  const shuffled = this.nums.slice();
  const n = shuffled.length;
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

function maxDepth(root) {
  if (!root) return null;
  let max = Math.max(maxDepth(root.left), maxDepth(root.right));
  return max + 1;
}

function bestStockProfit(prices) {
  let profit, buy = 0, sell = 1;
  for (let i = 0; i < prices.length; i++) {
    if (prices[buy] < prices[sell]) {
      profit = Math.max(prices[sell] - prices[buy], profit);
    } else {
      buy = sell;
    }
    sell++;
  }
  return profit;
}

function maxSubarray(nums) {
  let prev = 0, max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(nums[i] + prev, nums[i]);
    max = Math.max(max, prev);
  }
  return max;
}

function convertSortedArrToBST(nums) {
  const BST = (left, right) => {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2);
    const node = new Node(nums[mid]);
    node.left = BST(left, mid - 1);
    node.right = BST(mid + 1, right);
    return node;
  }
  return BST(0, nums.length - 1);
}

var Solution = function(nums) {
  this.nums = nums;
}
Solution.prototype.reset = function() {
  return this.nums;
}
Solution.prototype.shuffle = function() {
  const shuffled = this.nums.slice();
  const n = shuffled.length;
  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  for (let i = 0; i < n; i++) {
    swap(shuffled, i, Math.floor(Math.random * n));
  }
  return shuffled;
}

function houseRobber(nums) {
  let before = prev = 0;
  for (let i = 0; i < nums.length; i++) {
    let temp = prev;
    prev = Math.max(nums[i] + before, prev);
    before = temp;
  }
  return prev;
}

function reverseInt(x) {
  const abs = Math.abs(x).toString().split("").reverse().join("");
  const parsed = parseInt(abs);
  if (parsed > 2 ** 31) return 0;
  return parsed * Math.sign(x);
}

function palindromeLL(head) {
  let fast = slow = head, temp, prev;
  while (fast && fast.next) {
    fast = fast.next.next, slow = slow.next;
  }
  prev = slow, slow = slow.next, prev.next = null;
  while (slow) {
    temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }
  fast = head, slow = prev;
  while (slow) {
    if (fast.val !== slow.val) {
      return false
    }
    fast = fast.next, slow = slow.next;
  }
  return true;
}

function climbStairs(n) {
  if (n <= 2) return n;
  let first = 1, second = 2, current
  for (let i = 3; i <= n; i++) {
    current = first + second;
    first = second;
    second = current;
  }
  return current;
}

function countPrimes(n) {
  let count = 0, primes = [];
  if (n <= 1) return 0;
  for (let i = 2; i < n; i++) {
    if (primes[i] == undefined) {
      primes[i] = true;
      count++;
      for (let j = 2; j * i < n; j++) {
        primes[i * j] = false;
      }
    }
  }
  return count;
}
