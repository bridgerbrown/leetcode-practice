var MinStack = function() {
  this.minStack = [];
  this.container = [];
}

MinStack.prototype.push = function(n) {
  this.container.push(n);
  if (this.minstack.length <= 0 || n <= this.minStack[this.minStack.length - 1]) {
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
  const primes = [], count = 0;
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


function bestBuySellStock(prices) {
  let buy = max = 0, sell = 1;
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


function validateBST(root) {
  if (!root) return true;
  const validate = (root, min, max) => {
    if (!root) return true;
    if ((min !== null && min >= root) || (max !== null && max <= root)) return false;
    validate(root.left, min, root), validate(root.right, root, max);
  }
  return validate(root, null, null);
}


function deleteNodeLL(head, node) {
  let temp = node.next;
  node.val = temp.val;
  node.next = temp.next;
}


function maxSubarray(nums) {
  let prev = 0, max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(nums[i] + prev, prev);
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


function climbStairs(n) {
  let first = 1, second = 2;
  for (let i = 3; i < n; i++) {
    let temp = first + second;
    first = second;
    second = temp;
  }
  return temp;
}


function fizzBuzz(n) {
  let results = [];
  for (let i = 1; i <= n; i++) {
    if (n % 3 == 0 && n % 5 == 0) {
      results.push("FizzBuzz");
    } else if (n % 3 === 0) {
      results.push("Fizz");
    } else if (n % 5 === 0) {
      results.push("Buzz")
    } else {
      results.push(n.toString())
    }
  } 
  return results;
}

