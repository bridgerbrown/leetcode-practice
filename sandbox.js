function reverseInt(x) {
  const rev = Math.abs(x).toString().split("").reverse().join();
  const parsed = parseInt(rev);
  if (parsed > 2 ** 31 - 1) return 0;
  return parsed * Math.sign(x);
}

function firstBadVersion(isBadVersion) {
  return function (n) {
    let left = 0, right = n;
    while (right - left !== 1) {
      const mid = Math.floor((left + right) / 2);
      isBadVersion(mid) ? right = mid : left = mid;
    }
    return right;
  }
}

function strAtoi(str) {
  return Math.max(-(2 ** 31), Math.min(2 ** 31 - 1, parseInt(str) || 0));
}

function validateBST(root) {
  if (!root) return true;
  const validate = (root, min, max) => {
    if (!root) return true;
    if ((min !== null && min.val >= root) || (max !== null && max.val <= root)) return false;
    validate(root.left, min, root), validate(root.right, root, max);
  }
  return validate(root, null, null);
}

function convertSortedArrToBST(nums) {
  const BST = (left, right) => {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(nums[mid]);
    node.left = BST(left, mid - 1);
    node.right = BST(mid + 1, right);
    return current;
  }
  return BST(0, nums.length - 1);
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

function maxDepth(root) {
  if (!root) return null;
  let max = Math.max(maxDepth(root.left), maxDepth(root.right));
  return max + 1;
}

function BTLevelTraversal(root) {
  const results = [];
  if (!root) return results;
  const DFS = (node, level) => {
    results[level] = [...(results[level], []), node.val];
    if (node.left) DFS(node.left, level + 1);
    if (node.right) DFS(node.right, level + 1);
  }
  DFS(root, 0);
  return results;
}

function longestPrefix(strs) {
  if (strs === undefined || strs.length === 0) return "";
  return strs.reduce((prev, next) => {
    let i = 0;
    while(prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  })
}

function mergeSortedArr(nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i], i--;
    } else {
      nums1[k] = nums2[j], j--;
    }
    k--;
  }
  while (j >= 0) {
    nums1[k] = nums2[j], j--, k--;
  }
  return nums1;
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

function symmetricTree(root){
  if (!root) return true;
  const check = (left, right) => {
    if (!left && !right) return true;
    if (left && !right || !left && right || left.val !== right.val) return false;
    check(left.right, right.left), check(left.left, right.right);
  }
  return check(root.left, root.right);
}

function convertSortedArrToBST(nums) {
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

function firstBadVersion(isBadVersion) {
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

function everyIsUnique(nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    } else {
      set.add(nums[i]);
    }
  }
  return false;
}

function rotateImage(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0] / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix[0] - j - 1] 
      matrix[i][matrix[0] - j - 1] = temp;
    }
  }
}

function longestPrefix(strs) {
  if (strs === undefined || strs.length === 0) return "";
  return strs.reduce((prev, next) => {
    const i = 0;
    while(prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  })
}

function mergeSortedArr(nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = n + m - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) nums1[k] = nums1[i], i--;
    else nums1[k] = nums2[j], j--;
    k--;
  }
  while (j >= 0) nums1[k] = nums2[j], j--, k--;
  return nums1;
}
