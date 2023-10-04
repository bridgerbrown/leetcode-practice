function symmetricTree(root) {
  if (!root) return true;
  const DFS = (left, right) => {
    if (!left && !right) return true;
    if (left && !right || !left && right || left.val !== right.val) return false;
    return DFS(left.right, right.left) && DFS(left.left, right.right);    
  };
  return DFS(root.left, root.right);
};

function reverseLL(head) {
  let prev = temp = null, cur = head;
  while (cur) {
    temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return prev;
};

function mergeSortedArr(nums1, nums2, m, n) {
  let i = m - 1, j = n - 1, k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
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
};

function solution(isBadVersion) {
  return function(n) {
    let left = 0, right = n;

    while (right - left !== 1) {
      let mid = parseInt((left + right) / 2);
      isBadVersion(mid) ? right = mid : left = mid;
    }
    return right;
  }
};

function maxDepth(root) {
  if (!root) return null;
  let max = Math.max(maxDepth(root.left), maxDepth(root.right));
  return max + 1;
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

function palindromStr(str) {
  const chars = str.replace(/[^a-b0-9]/gi, "");
  for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
    if (chars[i] !== chars[j]) return false;
  }
  return true;
}

function anagramStr(s, t) {
  const alph = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    alph[s.charCodeAt(i) - 97]++;
    alph[t.charCodeAt(i) - 97]--;
  }
  return alph.every(count => count === 0);
};

function levelOrder(root) {
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

function sortedArrToBST(nums) {
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

function maxDepth(root) {
  if (!root) return null;
  let max = Math.max(maxDepth(root.left), maxDepth(root.right));
  return max + 1;
}

function solution(isBadVersion) {
  return function(n) {
    let i = 0, j = n;
    while (j - i !== 1) {
      let mid = parseInt((left + right) / 2);
      isBadVersion(mid) ? right = mid : left = mid;
    } 
    return right;
  }
}

function levelOrderBST(root) {
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

function symmetricTree(root) {
  if (!root) return true;
  const DFS = (left, right) => {
    if (!left && !right) return true;
    if (left && !right || !left && right || left.val !== right.val) return false;
    return DFS(left.right, right.left) && DFS(left.left, right.right);
  };
  return DFS(root.left, root.right);
}

function firstUniqueChar(str) {
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let i = 0; i < str.length; i++){
    if (freq[str[i]] === 1) return i;
  }
  return -1;
}

function sortedArrToBST(nums) {
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

function mergeSortedArr(nums1, nums2, m, n) {
  let i = m - 1, j = n - 1, k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
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

function anagramStr(s, t) {
  if (s.length !== t.length) return false;
  const alph = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    alph[s.charCodeAt(i) - 97]++;
    alph[t.charCodeAt(i) - 97]--;
  }
  return alph.every(count => count === 0);
}

function validBST(root) {
  if (!root) return true;
  const validate = (root, min, max) => {
    if (!root) return true;
    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) return false;
    return validate(root.left, min, root.val) && validate(root.right, root.val, max);
  }
  return validate(root, null, null);
}

function atoiStr(str) {
  return Math.max(-(2 ** 31), Math.min(2 ** 31 - 1, parseInt(str) || 0));
}
