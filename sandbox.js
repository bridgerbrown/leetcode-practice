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

function mergeSortedLL(list1, list2) {
  const merged = new Node();
  const head = merged;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      merged.next = new Node(list1.val), list1 = list1.next;
    } else {
      merged.next = new Node(list2.val), list2 = list2.next;
    }
    merged = merged.next;
  }
  merged.next = list1 || list2;
  return head.next;
}

function reverseInt(int) {
  const abs = Math.abs(int).toString().split("").reverse().join("");
  const parsed = parseInt(abs);
  if (parsed > 2 ** 31 - 1) return 0;
  return parsed * Math.sign(int);
}

function convertSortedArrBST(nums) {
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

function findUnique(nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    set.has(nums[i]) ? set.delete(nums[i]) : set.add(nums[i]);
  }
  return set.values().next().value;
}

function palindromStr(str) {
  str = str.toLowerCase().replace(/[^a-b0-9]/gi, "");
  for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
    if (str.charAt(i) !== str.charAt(j)) return false;
  }
  return true;
}

function longestPrefix(strs) {
  if (strs.length <= 0) return "";
  return strs.reduce((prev, next) => {
    const i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  }) 
}

function maxDepth(root) {
  if (!root) return null;
  let max = Math.max(maxDepth(root.left), maxDepth(root.right));
  return max + 1;
}
