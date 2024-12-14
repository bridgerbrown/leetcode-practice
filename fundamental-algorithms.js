// Arrays & Hashing Algorithm
function hasCommonElement(arr1, arr2) {
  const hashSet = new Set();
  for (const el of arr1) hashSet.add(el);
  for (const el of arr2) if (hashSet.has(el)) return true;
  return false;
} // O(n), O(n)

// Two Pointer Algorithm
function twoSum(arr, target) { 
  // assumes ordered
  let l = 0, r = arr.length - 1;
  while (l < r) {
    const sum = arr[l] + arr[r];
    if (sum === target) {
      return [arr[l], arr[r]];
    } else if (sum < target) {
      l++;
    } else {
      r--;
    }
  }
  return null;
} // O(n), O(1)

// Stack Algorithm
function isBalancedParentheses(str) {
  const stack = [];
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (const char of str) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
} // O(n), O(n)

// Binary Search Algorithm
function binarySearch(arr, target) {
  // assumes sorted
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
} // O(log n), O(1)

// Sliding Window Algorithm
function maxSumSubarray(arr, k) {
  if (arr.length < k) return null;

  let maxSum = 0, windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
} // O(n), O(1)
