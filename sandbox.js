function convertArrToBST(nums) {
  const BST = (left, right) => {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2);
    const current = new TreeNode(nums[mid]);
    current.left = BST(left, mid - 1);
    current.right = BST(mid + 1, right);
    return current;
  };
  return BST(0, nums.length - 1);
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

function validateBST(root) {
  if (!root) return true;
  const validate = (root, min, max) => {
    if (!root) return true;
    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) return false;
    return validate(root.left, min, root.val) && validate(root.right, root.val, max);
  }
  return validate(root, null, null);
}

function BTlevelTraversal(root) {
  const results = [];
  if (!root) return results;
  const DFS = (cur, level) => {
    results[level] = [...(results[level], []), cur.val];
    if (cur.left) DFS(cur.left, level + 1)
    if (cur.right) DFS(cur.right, level + 1);
  };
  DFS(root, 0);
  return results;
}

function symmetricTree(root) {
  if (!root) return true;
  const check = (left, right) => {
    if (!left && !right) return true;
    if (!left && right || left && !right || left.val !== right.val) return false;
    check(left.right, right.left), check(left.left, right.right);
  }
  return check(root.left, root.right);
}

function reverseInt(x) {
  const rev = Math.abs(x).toString().split("").reverse().join();
  const int = parseInt(rev);
  if (int > 2 ** 31 - 1) return 0;
  return int * Math.sign(x);
}

function twoSum(nums, target) {
  const differences = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in differences) return [i, differences[diff]];
    differences[nums[i]] = i;
  }
};

function maxDepth(root) {
  if (!root) return null;
  let max = Math.max(maxDepth(root.left), maxDepth(root.right));
  return max + 1;
}

function mergeSortedArr(nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i].val > nums2[j].val) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  while (j >= 0) {
    nums1[k] = nums2[j];
    j--, k--;
  }
  return nums1;
}

function palindromStr(str) {
  const chars = str.toLowerCase().replace(/[^a-b0-9]/gi, "");
  for (let i = 0, j = chars.length - 1; i <= j; i++, j--) {
    if (chars[i] !== chars[j]) return false;
  }
  return true;
}

function firstBadVersion(isBadVersion) {
  return function(n) {
    let left = 0, right = n;
    while (right - left !== 1) {
      const mid = parseInt((left + right) / 2);
      isBadVersion(mid) ? right = mid : left = mid;
    }
  };
}

function palindromStr(str) {
  str = str.toLowerCase().replace(/[^a-b0-9]/gi, "");
  for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
    if (str.charAt(i) !== str.charAt(j)) return false;
  }
  return true;
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

function longestPrefix(strs) {
  if (strs === undefined || strs.length === 0) return "";
  return strs.reduce((prev, next) => {
    const i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  });
};

function BTlevelTraversal(root) {
  const results = [];
  if (!root) return results;
  const DFS = (node, level) => {
    results[level] = [...(results[level] || []), node.val];
    if(node.left) DFS(node.left, level + 1);
    if(node.right) DFS(node.right, level + 1);
  }
  DFS(root, 0);
  return results;
}

function strAtoi(str) {
  return Math.max(-(2 ** 31), Math.min(2 ** 31 - 1, parseInt(str) || 0));
}

function convertArrToBST(nums) {
  const BST = (left, right) => {
    if (left > right) return null;
    const mid = Math.floor((left + right)/ 2);
    const current = new TreeNode(nums[mid]);
    current.left = BST(left, mid - 1);
    current.right = BST(mid + 1, right);
    return current;
  }
  return BST(0, nums.length - 1);
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
  while(j >= 0) {
    nums1[k] = nums2[j], j--, k--;
  }
  return nums1;
}
