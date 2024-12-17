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

// Linked List Algorithm (reversing)
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let next = current.next;
    current.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
} // O(n), O(1)

// Trees DFS and BFS Algorithms
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function recursiveDFS(node) {
  const result = [];

  function DFS(curr) {
    if (!curr) return;
    result.push(curr.value);
    DFS(curr.left), DFS(curr.right);
  }

  DFS(node);
  return result;
} // O(n), O(h)

function iterativeDFS(root) {
  if (!root) return [];

  const stack = [root];
  const result = [];

  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.value);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return result;
} // O(n), O(h)

function BFS(root) {
  if (!root) return [];

  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return result;
} // O(n), O(w)

// Trie Algorithm
class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }

  // Insert a word into the trie
  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  } // O(L)

  // Search for a full word in the trie
  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  } // O(L)

  // Check if any word starts with the given prefix
  startsWith(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  } // O(P)
}

// Backtracking Algorithm
function generateSubsets(nums) {
  const result = [];

  function backtrack(start, curr) {
    result.push([...curr]);

    for (let i = start; i < nums.length; i++) {
      curr.push(nums[i]);
      backtrack(i + 1, curr);
      curr.pop();
    }
  }

  backtrack(0, []);
  return result;
} // O(2^n), O(n)


