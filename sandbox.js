function rotateMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix[0].length - j - 1];
      matrix[i][matrix[0].length - j - 1] = temp;
    }
  }
}

function countPrimes(n) {
  let count = 0, primes = [];
  if (n <= 1) return 0 
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

var Solution = function(nums) {
  this.nums = nums;
}
Solution.prototype.reset = function() {
  return this.nums;
}
Solution.prototype.shuffle = function() {
  const slice = this.nums.slice();
  const n = slice.length;
  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  for (let i = 0; i < n; i++) {
    swap(slice, i, Math.floor(Math.random() * n));
  }
  return slice;
}

var MinStack = function() {
  this.minStack = [];
  this.main = [];
}
MinStack.prototype.push = function(n) {
  this.main.push(n);
  if (this.minStack.length == 0 || n <= this.minStack[this.minStack.length - 1]) {
    this.minStack.push(n);  
  }
}
MinStack.prototype.pop = function(n) {
  let val = this.main.pop(n);
  if (val == this.minStack[this.minStack.length - 1]) {
    this.minStack.pop(n);  
  }
}
MinStack.prototype.top = function() {
  return this.main[this.main.length - 1];
}
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
}

function revStr(str) {
  let left = 0, right = str.length - 1;
  while (left <= right) {
    let temp = str[left];
    str[left] = str[right];
    str[right] = temp;
    left++, right--;
  }
}

function bestBuySellStock(prices) {
  let buy = max = 0, sell = 1;
  while (sell < prices.length) {
    if (prices[buy] < prices[sell]) {
      profit = prices[sell] - prices[buy];
      max = Math.max(max, profit);
    } else {
      buy = sell;
    }
    sell++;
  }
  return max;
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

function rotateArrSteps(nums, k) {
  k %= nums.length; 
  const reverse = (i, j) => {
    while(i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++, j--;
    }
  } 
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
}

function maxSubarray(nums) {
  let prev = 0, max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i]);
    max = Math.max(prev, max);
  }
  return max;
}

function llCycle(head, pos) {
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next, head = head.next;
    if (fast == head) return true;
  }
  return false;
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

function removeNthFromLL(head, n) {
  let fast = slow = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  if (!fast) return head.next;
  while (fast.next) {
    fast = fast.next, slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
}

function deleteNode(head, node) {
  let temp = node.next;
  node.val = temp.val;
  node.next = temp.next;
}

function bestBuySellStock(prices) {
  let buy = max = 0, sell = 1;
  while (sell <= prices.length) {
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
MinStack.prototype.pop = function(n) {
  let val = this.container.pop();
  if (val == this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
}
MinStack.prototype.top = function() {
  return this.container[this.container.length - 1];
}
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
}

function maxSubarray(nums) {
  let max = -Infinity, prev = 0;
  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(nums[i] + prev, nums[i]);
    max = Math.max(max, prev);
  }
  return max;
}

function countPrimes(n) {
  let count = 0;
  if (n <= 1) return 0;
  let primes = [];
  for (let i = 2; i < n; i++) {
    if (primes[i] === undefined) {
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
  let first = 1, second = 2, count = 0;
  if (n <= 2) return n;
  for (let i = 3; i < n; i++) {
    count = first + second;
    first = second;
    second = count;
  }
  return count;
}

function fizzBuzz(n) {
  const results = [];
  if (n <= 0) return results;
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push("FizzBuzz");
    } else if (i % 3 === 0) {
      results.push("Fizz");
    } else if (i % 5 === 0) {
      results.push("Buzz");
    } else {
      results.push(i.toString());
    }
  }
  return results;
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
