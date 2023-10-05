function maxDepth(root) {
  if (!root) return null;
  let max = Math.max(maxDepth(root.left), maxDepth(root.right));
  return max + 1;
}

function anagramStr(s, t) {
  if (s.length !== t.length) return false;
  const alph = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    alph[s.charCodeAt(i) - 97]++;
    alph[t.charCodeAt(i) - 97]--;
  };
  return alph.every(count => count === 0);
}

function firstBadVersion(isBadVersion) {
  return function (n) {
    let left = 0, right = n;
    while (right - left !== 1) {
      let mid = parseInt((left + right) / 2);
      isBadVersion(mid) ? right = mid : left = mid;
    }
    return right;
  }
}

function BTlevelTraversal(root) {
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

function firstUniqueChar(str) {
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]] === 1) return i;
  }
  return -1;
}

function convertArrtoBST(nums) {
  const BST = (left, right) => {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2);
    const cur = new TreeNode(nums[mid]);
    cur.left = BST(left, mid - 1);
    cur.right = BST(mid + 1, right);
    return cur;
  } 
  return BST(0, nums.length - 1);
}

function validateBST(root) {
  if (!root) return true;
  const validate = (root, min, max) => {
    if (!root) return true;
    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) return false;
    return validate(root.left, min, root.val) && validate(root.right, root.val, max); 
  }
  return validate(root, null, null);
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
  while (j >= 0) nums1[k] = nums2[j], j--, k--;
  return nums1;
}

function symmetricTree(root) {
  if (!root) return true;
  const DFS = (left, right) => {
    if (!left && !right) return true;
    if (left && !right || !left && right || left.val !== right.val) return false;
    return DFS(left.right, right.left) && DFS(left.left, right.right);
  };
  return DFS(root.left, root.right);
}

function reverseStr(arr) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    let temp = arr[right];
    arr[right] = arr[left];
    arr[left] = temp;
    left++, right--;
  }
}

function convertArrtoBST() {
  const BST = (left, right) => {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2);
    const cur = new TreeNode(nums[mid]);
    cur.left = BST(left, mid - 1);
    cur.right = BST(mid + 1, right);
    return cur;
  }
  return BST(0, nums.length - 1);
}

function validateBST(root) {
  if (!root) return true;
  const validate = (root, min, max) => {
    if (!root) return true;
    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) return false;
    return validate(root.left, min, root.val) && validate(root.right, root.val, max);    
  }
  return validate(root, null, null);  
}

function strStr(haystack, needle) {
  if (!needle.length) return 0;
  return haystack.indexOf(needle);
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

function symmetricTree(root) {
  if (!root) return true;
  const DFS = (left, right) => {
    if (!left && !right) return true;
    if (left && !right || !left && right || left.val !== right.val) return false;
    DFS(left.right, right.left), DFS(left.left, right.right);
  }
  return DFS(root.left, root.right);
}

function maxDepth(root) {
  if (!root) return null;
  let max = Math.max(maxDepth(root.left), maxDepth(root.right));
  return max + 1;
}

function BTlevelTraversal(root) {
  const tree = [];
  if (!root) return tree;
  const DFS = (node, level) => {
    tree[level] = [...(tree[level] || []), node.val];
    if (node.left) DFS(node.left, level + 1);
    if (node.right) DFS(node.right, level + 1);
  }
  DFS(root, 0);
  return tree;
}

function mergeSortedArr(nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--, k--;
    } else {
      nums1[k] = nums2[j];
      j--, k--;
    }
  }
  while (j >= 0) {
    nums1[k] = nums2[j], j--, k--;
  }
  return nums1;
}

function reverseStr(arr) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    let temp = arr[right];
    arr[right] = arr[left];
    arr[left] = temp;
    left++, right--;
  }
}

function firstBadVersion(isBadVersion) {
  return function(n) {
    let left = 0, right = n;
    while (right - left !== 1) {
      let mid = parseInt((left + right) / 2);
      isBadVersion(mid) ? right = mid : left = mid;
    }
    return right;
  }
}
