function twoSum(nums, target) {
  const differences = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in differences) return [i, differences[diff]];
    differences[nums[i]] = i;
  }
}

function arrIntersection(nums1, nums2) {
  const freq = {};
  const intersection = [];
  for (let num of nums1) {
    freq[num] = (freq[num] || 0) + 1;
  }
  for (let num of nums2) {
    if (freq[num] > 0) {
      intersection.push(num);
      freq[num]--;
    }
  }
  return intersection;
}

function containsDuplicates(nums) {
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) {
      return true;
    } else {
      set.add(num);
    }
  }
  return false;
}

function btLevelTraversal(root) {
  const bt = [];
  if (!root) return bt;
  const DFS = (node, level) => {
    bt[level] = [...(bt[level] || []), node.val];
    if (node.left) DFS(node.left, level + 1);
    if (node.right) DFS(node.right, level + 1);
  }
  DFS(root, 0);
  return bt;
}

function revStr(s) {
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }
}

function longestCommonPrefix(strs) {
  if (strs === undefined || strs.length === 0) return "";
  return strs.reduce((prev, next) => {
    const i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  })
}

function mergeTwoSortedLists(list1, list2) {
  let merged = new ListNode();
  let head = merged;
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
  const BST = (root, min, max) => {
    if (!root) return true;
    if ((min !== null && min >= root.val) || (max !== null && max <= root.val)) return false;
    BST(root.left, min, root.val), BST(root.right, root.val, max);
  }
  return BST(root, null, null);
}

var Solution = function(nums) {
  this.nums = nums;
}
Solution.prototype.reset = function() {
  return this.nums;
}
Solution.prototype.shuffle = function() {
  const shuffled = this.nums.slice;
  const n = this.nums.length;
  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  for (let i = 0; i < n; i++) {
    swap(shuffled, i, Math.floor(Math.random() * n));
  }
  return shuffled;
}
