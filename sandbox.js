function firstBadVersion(n, bad) {
  return function(n) {
    let left = 0, right = n;
    while (right - left !== 1) {
      const mid = Math.floor((left + right) / 2);
      isBadVersion(mid) ? right = mid : left = mid;
    }
  }
  return right;
}

function climbStairs(n) {
  if (n <= 2) return n;
  let first = 1, second = 2, curr;
  for (let i = 3; i < n; i++) {
    curr = first + second;
    first = second;
    second = current;
  }
  return curr;
}

function reverseLL(head) {
  let prev = null, temp, curr = head;
  while (curr.next) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
}

function validParentheses(s) {
  const chars = {...};
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      arr.push(s[i]);
    } else {
      if (arr[arr.length - 1] == chars[s[i]]) {
        arr.pop();
      } else return false;
    }
  }
  return arr.length === 0;
}

function powerOfThree(n) {
  while(n > 1) {
    n /= 3;
  }
  return n === 1;
}

function pascalsTriangle(r) {
  if (r <= 0) return [];
  let pascals = [[1]];
  for (let i = 1; i < r; i++) {
    const prev = pascals[pascals.length - 1];
    const left = [...prev, 0];
    const right = [0, ...prev];
    const curr = left.map((r, i) => r + right[i]);
    pascals.push(curr);
  }
  return pascals;
}

function numberOf1Bits(n) {
  let count = 0;
  while (n !== 0) {
    count += n & 1;
    n = n >>> 1;
  }
  return count;
};

function firstBadVersion(n, bad) {
  return function(n) {
    let left = 0, right = n;
    while (right - left !== 1) {
      const mid = Math.floor((left + right) / 2);
      isBadVersion(mid) ? right = mid : left = mid;
    }
  }
  return right;
}

function hammingDistance(x, y) {
  return (x ^ y).toString(2).replace(/0/g, "").length;
}

function reverseLL(head) {
  let prev = temp = null, curr = head;
  while (curr) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
}
