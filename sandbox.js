function houseRobber(nums) {
  let before = prev = 0;
  for (let i = 0; i < nums.length; i++) {
    let temp = prev;
    prev = Math.max(nums[i] + before, prev);
    before = temp;
  }
  return prev;
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
    let temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
  }
  for (let i = 0; i < n; i++) {
    swap(shuffled, i, Math.floor(Math.random() * n));
  }
  return shuffled;
}

function maxSubarray(nums) {
  let prev = 0, max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i]);
    max = Math.max(max, prev);
  }
  return max;
}

function countPrimes(n) {
  let count = 0, primes = [];
  if (n <= 1) return 0;
  for (let i = 2; i < n; i++) {
    if (primes[i] == undefined) {
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

function BTLevelTraversal(root) {
  const results = [];
  if (!root) return results;
  const DFS = (node, level) => {
    results[level] = [...(results[level] || []), node.val];
    if (node.left) DFS(node.left, level + 1);
    if (node.right) DFS(node.right, level + 1);
    return node;
  }
  DFS(root, 0);
  return results;
}

function fizzBuzz(n) {
  const results = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      results.push("FizzBuzz");
    } else if (i % 3 == 0) {
      results.push("Fizz");
    } else if (i % 5 == 0) {
      results.push("Buzz");
    } else {
      results.push(i.toString());
    }
  }
  return results;
}

var MinStack = function() {
  this.minStack = [];
  this.container = [];
};
MinStack.prototype.push = function(val) {
  this.container.push(val);
  if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
    this.minStack.push(val);  
  }
};
MinStack.prototype.pop = function() {
  let val = this.container.pop();
  if (val === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
};
MinStack.prototype.top = function() {
  return this.container[this.container.length - 1];
};
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
};

function mergeSortedLLs(list1, list2) {
  const merged = new Node();
  const head = merged;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      merged.next = new Node(list1.val), list1 = list1.next;
    } else {
      merged.next = new Node(list2.val), list2 = list2.next;
    }
    merged = merged.next;
  }
  merged.next = list1 || list2;
  return head.next;
}
