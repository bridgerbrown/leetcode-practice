function btleveltraversal(root) {
  const levels = [];
  if (!root) return levels;
  const DFS = (node, level) => {
    levels[level] = [...(levels[level] || []), node.val];
    if (node.left) DFS(node.left, level + 1);
    if (node.right) DFS(node.right, level + 1);
  }
  DFS(root, 0);
  return levels;
}

function convertSortedArrToBST(nums) {
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

function longestCommonPrefix(strs) {
  if (strs === undefined || strs.length === 0) return "";
  return strs.reduce((prev, next) => {
    const i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  })
}

function strStr(haystack, needle) {
  if (!needle.length) return 0;
  return haystack.indexOf(needle);
}

function mergeTwoSortedLists(list1, list2) {
  const merged = new ListNode();
  const head = merged;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      merged.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      merged.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    merged = merged.next;
  }
  merged.next = list1 || list2;
  return head.next;
}

function arrayIntersection(nums1, nums2) {
  const freq = {};
  const results = [];
  for (let num of nums1) {
    freq[num] = (freq[num] || 0) + 1;
  }
  for (let num of nums2) {
    if (freq[num] > 0) { 
      results.push(num)
      freq[num]--;
    }
  }
  return results;
}

function validateBST(root) {
  if (!root) return true;
  const BST = (root, min, max) => {
    if (!root) return true;
    if ((min !== null && min > root.val) || (max !== null && max < root.val)) return false;
    BST(root.left, min, root.val), BST(root.right, root.val, max);
  }
  return BST(root, null, null);
}

function maxSubarray(nums) {
  let prev = 0, max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(nums[i], prev + nums[i]);
    max = Math.max(prev, max);
  }
  return max;
}

function twoSum(nums, target) {
  const differences = {};
  const results = [];
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in differences) return [i, differences[diff]];
    differences[nums[i]] = i;
  }
  return results;
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
    for (let j = 0; j < matrix[0].length / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix[0].length - j - 1];
      matrix[i][matrix[0].length - j - 1] = temp;
    }
  }
}
