function maxDepth(root) {
  if (!root) return null;
  let max = Math.max(maxDepth(root.left), maxDepth(root.right));
  return max + 1;
}

function unique(nums) {
  const set = new Set();
  for (let num of nums) {
    set.has(num) ? set.delete(num) : set.add(num);
  }
  return set.values().next().value;
}

function convertToBST(nums) {
  function BST(left, right) {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2);
    const curr = new Node(nums[mid]);
    curr.left = BST(left, mid - 1);
    curr.right = BST(mid + 1, right);
    return curr;
  };
  return BST(0, nums.length - 1);
}

function firstUniqueStr(s) {
  const freq = {};
  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  };
  for (let i = 0; i < s.length; i++) {
    if (freq[i] === 1) return i; 
  };
  return -1;
}

function revLL(head) {
  let prev = null, cur = head;
  while (cur) {
    let temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return prev;
}

function revLL(head) {
  let prev = null, cur = head;
  while (cur) {
    let temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return prev;
}

function findUnique(nums) {
  const set = new Set();
  for (let num of nums) {
    set.has(num) ? set.delete(num) : set.add(num);
  }
  return set.values().next().value;
}

function firstUniqueStr(s) {
  const freq = {};
  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (freq[i] === 1) return i; 
  }
  return -1;
}

function convertToBST(nums) {
  function BST(left, right) {
    if (left > right) return null
    const mid = Math.floor((left + right) / 2);
    const cur = new Node(nums[mid]);
    cur.left = BST(left, mid - 1);
    cur.right = BST(mid + 1, right);
    return cur;
  }
  BST(0, nums.length - 1);
}

function maxDepth(root) {
  if (!root) return null;
  let max = Math.max(maxDepth(root.left), maxDepth(root.right));
  return max + 1;
}

function countPrimes(n) {
  let count = 0;
  let primes = [];
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

function strStr(haystack, needle) {
  if (!needle.length) return 0;
  return haystack.indexOf(needle);
}

function BTLevelTraversal(root) {
  const results = [];
  if (!root) return results;
  function DFS(node, level) {
    results[level] = [...(results[level] || []), node.val];
    if (node.left) DFS(node.left, level + 1);
    if (node.right) DFS(node.right, level + 1);
  }
  DFS(root, 0);
  return results;
}

var MinStack = function() {
  this.minStack = [];
  this.container = [];
}
MinStack.prototype.push = function(val) {
  this.container.push(val);
  if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
    this.minStack.push(val);
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
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
}

function pascals(numRows) {
  if (!numRows || numRows <= 0) return [];
  const pascal = [[1]];

  for (let i = 1; i < numRows.length; i++) {
    const prevRow = pascal[pascal.length - 1];
    const left = [...prevRow, 0];
    const right = [0, ...prevRow];
    const curr = left.map((r, i) => r + right[i]);
    pascal.push(curr);
  }
  return pascal;
}
