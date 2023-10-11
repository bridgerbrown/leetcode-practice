function moveZeroes(nums) {
  const diff = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i - diff], nums[i]] = [nums[i], nums[i - diff]];
    } else {
      diff++;
    }
  }
}

function maxDepth(root) {
  if (!root) return null;
  let max = Math.max(maxDepth(root.left), maxDepth(root.right));
  return max + 1;
}

function longestPrefix(strs) {
  if (strs === undefined || strs.length === 0) return "";
  return strs.reduce((prev, next) => {
    const i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.splice(0, i);
  })
}

function BTLevelTraversal(root) {
  const results = [];
  if (!root) return results;
  const DFS = (node, level) => {
    results[level] = [...(results[level] || []), node.val];
    if (node.left) DFS(node.right, level + 1); 
    if (node.right) DFS(node.right, level + 1); 
  }
  DFS(root, 0);
  return results;
}

function symmetricTree(root) {
  if (!root) return true;
  const DFS = (left, right) => {
    if (!left && !right) return true;
    if (!left && right || left && !right || left.val !== right.val) return false;
    DFS(left.right, right.left), DFS(left.left, right.right);
  }
  return DFS(root.left, root.right);
}

function maxProfit(prices) {
  const profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] > prices[i]) {
      profit += prices[i + 1] - prices[i];
    }
  }
  return profit;
}

function validateBST(root) {
  if (!root) return true;
  const validate = (root, min, max) => {
    if (!root) return true;
    if ((min !== null && min >= root) || (max !== null && max <= root)) return false;
    validate(root.left, min, root), validate(root.right, root, min);
  }
  return validate(root, null, null);
}

function firstBadVersion(isBadVersion) {
  return function(n) {
    let left = 0, right = n;
    while (right - left !== 1) {
      const mid = Math.floor((left + right) / 2);
      isBadVersion(mid) ? right = mid : left = mid;
    }
    return right;
  }
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
  BST(0, nums.length - 1);
}

function rotate(nums) {
  k %= nums.length;
  const reverse = (i, j) => {
    while(i <= j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++, j--
    }
  }
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
}

function llCycle(head, pos) {
  let fast = head, slow = head;
  while (fast && fast.next) {
    slow = slow.next, fast = fast.next.next;
    if (fast.val === slow.val) return true;
  }
  return false;
}

function symmetricTree(root) {
  if (!root) return true;
  const DFS = (left, right) => {
    if (!left && !right) return true;
    if (left && !right || !left && right || left.val !== right.val) return false;
    DFS(left.right, right.left), DFS(left.left, right.right);
  }
  return DFS(root.left, root.right);
}

function longestPrefix(strs) {
  if (strs === undefined || strs.length === 0) return "";
  return strs.reduce((prev, next) => {
    const i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  })
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

function firstBadVersion(isBadVersion) {
  return function(n) {
    let left = 0, right = n;
    while (right - left !== 1) {
      const mid = Math.floor((left + right) / 2);
      isBadVersion(mid) ? right = mid : left = mid;
    }
    return right;
  }
}

function BTLevelTraversal(root) {
  const results = [];
  if (!root) return results;
  const DFS = (node, level) => {
    results[level] = [...(results[level] || []), node.val];
    if (node.left) DFS(node.left, level + 1);
    if (node.right) DFS(node.right, level + 1);
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

function convertArrToBST(nums){
  const BST = (left, right) => {
    if (left.val > right.val) return null;
    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(nums[mid]);
    node.left = BST(left, mid - 1);
    node.right = BST(mid + 1, right);
    return node;
  }
  BST(0, nums.length - 1);
}

function reverseString(arr) {
  let i = 0, j = arr.length - 1;
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++, j--;
  }
  return arr;
}

function maxDepth(root) {
  if (!root) return null;
  let max = Math.max(maxDepth(root.left), maxDepth(root.right));
  return max + 1;
}
