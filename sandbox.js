function reverseLL(head) {
  let prev = temp = null, cur = head;
  while (cur) {
    temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  };
  return prev;
}

function stringToAtoi(s) {
  return Math.max(-(2 ** 31), Math.min((2 ** 31 - 1), parseInt(s)) || 0);
}

function symmetricTree(root) {
  if (!root) return true;
  const DFS = (left, right) => {
    if (!left && !right) return true;
    if (left.val !== right.val || !left && right || left && !right) return false;
    DFS(left.right, right.left), DFS(left.left, right.right);
  }
  return DFS(root.left, root.right);
};

function romanToInt(s) {
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

function missingNumber(nums) {
  let sum = total = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    total += i + 1;
  }
  return total - sum;
}

function reverseLL(head) {
  let prev = temp = null, cur = head;
  while (cur) {
    temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return prev;
}

function validParentheses(s) {
  const p = {...};
  const arr = [];
  for (let i = 0; i  < s.length; i ++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      arr.push(s[i]);
    } else {
      if (arr[arr.length - 1] == p[s[i]]) {
        arr.pop();
      } else {
        return false;
      }
    }
  }
  return arr.length === 0;
}

var MinStack = function() {
  this.minStack = [];
  this.main = [];
}
MinStack.prototype.push = function(n) {
  this.main.push(n);
  if (!this.minStack.length || n <= this.minStack[this.minStack.length - 1]) {
    this.minStack.push(n);
  }
}
MinStack.prototype.pop = function() {
  let val = this.main.pop();
  if (val === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
}
MinStack.prototype.top = function() {
  return this.main[this.main.length - 1];
}
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
}

function reverseBits(n) {
  let rev = 0, count = 32;
  while(count--) {
    rev *= 2;
    rev += i & 1;
    n = n >> 1;
  }
  return rev;
}

function climbStairs(n) {
  if (n <= 2) return n;
  let first = 1, second = 2, curr;
  for (let i = 3; i  < n; i ++) {
    curr = first + second;
    first = second;
    second = curr;
  }
  return second;
}
