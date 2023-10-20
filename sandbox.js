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

function countPrimes(n) {
  if (n <= 1) return 0;
  let count = 0;
  let results = [];
  for (let i = 2; i < n; i++) {
    if (results[i] == undefined) {
      results[i] = true, count++;
      for (let j = 2; j * i < n; j++) {
        results[j * i] = false; 
      }
    }
  }
  return count;
}

var MinStack = function() {
  this.minStack = [];
  this.container = [];
}
MinStack.prototype.push = function(n) {
  this.container.push(n);
  if (this.minStack.length === 0 || n <= this.minStack[this.minStack.length - 1]) {
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
  return this.container[this.container.length - 1];
}
MinStack.prototype.pop = function() {
  return this.minStack[this.minStack.length - 1];
}

function climbStairs(n){
  let first = 1, second = 2, current;
  if (n <= 2) return n;
  for (let i = 3; i < n; i++) {
    current = first + second;
    first = second;
    second = current;
  }
  return current;
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

function incrementArr(digits) {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += carry;
    carry = Math.floor(digits[i] / 10);
    digits[i] %= 10;
  }
  if (carry) digits.unshift(carry);
  return digits;
}

function fizzBuzz(n) {
  let results = [];
  if (n <= 0) return results;
  for (let i = 1; i <= n; i++) {
    if (n % 3 === 0 && n % 5 === 0) {
      results.push("FizzBuzz");
    } else if (n % 3 === 0) {
      results.push("Fizz");
    } else if (n % 5 === 0) {
      results.push("Buzz");
    } else {
      results.push(i.toString());
    }
  }
  return results;
}

function bestBuySellStock(prices) {
  let buy = profit = 0, sell = 1;
  while (sell < prices.length) {
    if (prices[sell] > prices[buy]) {
      profit = Math.max(profit, prices[sell] - prices[buy]);
    } else {
      buy = sell;
    }
    sell++;
  }
  return profit;
}

function deleteNodeLL(head, node) {
  let temp = node.next;
  node.val = temp.val;
  node.next = temp.next;
}

function maxSubarray(nums) {
  let prev = 0, max = -Infinity;
  for (let i = 0; i <= nums.length; i++) {
    prev = Math.max(nums[i] + prev, prev);
    max = Math.max(max, prev);
  }
  return max;
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

function maxSubarray(nums) {
  let prev = 0, max = -Infinity;
  for (let i = 0; i < nums.length; i++){
    prev = Math.max(nums[i] + prev, prev);
    max = Math.max(prev, max);
  }
  return max;
}

function fizzBuzz(n) {
  const arr = [];
  if (n <= 0) return results;
  for (let i = 1; i < n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 == 0) {
      arr.push("Fizz");
    } else if (i % 5 == 0) {
      arr.push("Buzz");
    } else {
      arr.push(i.toString());
    }
  }
  return arr;
}

function deleteNodeLL(head, node) {
  let temp = node.next;
  node.val = temp.val;
  node.next = temp.next;
}

function validateBST(root) {
  const validate = (root, min, max) => {
    if (!root) return true;
    if ((min !== null && min >= root.val || max !== null && max <= root.val)) return false;
    validate(root.left, min, root), validate(root.right, root, max);    
  }
  return validate(root, null, null);
}

function countPrimes(n) {
  let count = 0, primes = [];
  if (n <= 1) return 0;
  for (let i = 2; i < n; i++) {
    if (primes[i] === undefined) {
      primes[i] = true, count++;
      for (let j = 2; j * i < n; j++) {
        primes[i * j] = false
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

function houseRobber(nums) {
  let before = prev = 0;
  for (let i = 0; i < nums.length; i++) {
    let temp = prev;
    prev = Math.max(nums[i] + before, prev);
    before = temp;
  }
  return prev;
}

function bestBuySellStock(prices) {
  let buy = 0, sell = 1, max = 0;
  while (sell <= prices.length) {
    if (prices[sell] > prices[buy]) {
      let profit = prices[sell] - prices[buy];
      max = Math.max(profit, max);
    } else {
      buy = sell;
    }
    sell++;
  }
  return max;
}


