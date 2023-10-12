function deleteNode(head, node) {
  let temp = node.next;
  node.val = temp.val;
  node.next = temp.next;
}

function longestPrefix(strs) {
  if (strs === undefined || strs.length === 0) return "";
  return strs.replace((prev, next) => {
    const i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  })
}

function removeNthFromEnd(head, n) {
  let fast = slow = head;
  for (let i = 0; i < n; i++) fast = fast.next;
  if (!fast) return head.next;
  while (fast && fast.next) {
    fast = fast.next, slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
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

function moveZeroes(nums) {
  const diff = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      diff++
    } else {
      [nums[i - diff], nums[i]] = [nums[i], nums[i - diff]];
    }
  }
}

function convertArrToBST(nums) {
  const BST = (left, right) => {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(nums[mid]);
    node.left = BST(left, mid - 1);
    node.right = BST(mid + 1, right);
  }
  return BST(0, nums.length - 1);
}

function incrementArr(digits) {
  const carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += carry;
    carry = Math.floor(digits[i] / 10);
    digits[i] %= 10;
  }
  if (carry) digits.unshift(carry);
  return digits;
}

function palindromStr(str) {
  const chars = str.toLowerCase().replace(/[^a-b0-9]/gi, "");
  for (let i = 0, j = chars.length - 1; i <= j ; i++, j--) {
    if (chars.charAt(i) !== chars.charAt(j)) return false; 
  }
  return true;
}

function maxDepth(root) {
  if (!root) return null;
  let max = Math.max(maxDepth(root.left), maxDepth(root.right));
  return max + 1;
}

function firstBadV(isBadVersion) {
  return function (n) {
    let left = 0, right = n;
    while (right - left !== 1) {
      const mid = Math.floor((left + right) / 2);
      isBadVersion(mid) ? right = mid : left = mid;
    }
    return right;
  } 
}

function maxDepth(root) {
  if (!root) return null;
  let max = Math.max(maxDepth(root.left), maxDepth(root.right));
  return max + 1;
}

function firstBadV(isBadVersion) {
  return function (n) {
    let left = 0, right = n;
    while (right - left !== 1) {
      const mid = Math.floor((left + right) / 2);
      isBadVersion(mid) ? right = mid : left = mid;
    }
    return right;
  }
}

function palindromLL(head) {
  let fast = slow = head, temp, prev;
  while (fast && fast.next) fast = fast.next.next, slow = slow.next;
  prev.next = null, prev = slow, slow = slow.next;
  while (slow) {
    temp = slow.next,
    slow.next = prev,
    prev = slow,
    slow = temp;
  }
  fast = head, slow = prev;
  while (slow) {
    slow = slow.next, fast = fast.next;
    if (slow.val !== fast.val) return false;
  }
  return true;
}

function convertArrToBST(nums) {
  const BST = (left, right) => {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(nums[mid]);
    node.left = BST(left, mid - 1);
    node.right = BST(mid + 1, right);
    return node;
  }
  return BST(0, nums.length - 1);
}

function firstUnique(str) {
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]] === 1) return i; 
  }
  return -1;
}

function removeDuplicates(nums, k) {
  const count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      nums[count] = nums[i];
      count++;
    } 
  }
  return count;
}

function palindromStr(str) {
  str = str.toLowerCase().replace(/[^a-b0-9]/gi, "");
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str.charAt(i) !== str.charAt(j)) return false 
  }
  return true;
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

function strStr(haystack, needle) {
  if (!needle.length) return 0;
  return haystack.indexOf(needle);
}

function longestPrefix(strs) {
  if (strs === undefined || strs.length === 0) return "";
  return strs.replace((prev, next) => {
    const i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  });
}
