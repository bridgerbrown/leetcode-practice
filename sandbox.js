function moveZeroes(nums) {
  let places = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      places++;
    } else {
      [nums[i - places], nums[i]] = [nums[i], nums[i - places]];
    }
  }
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

function mergeTwoLL(list1, list2) {
  const merged = new Node();
  const head = merged;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      merged.next = new Node(list1.val);
      list1 = list1.next;
    } else {
      merged.next = new Node(list2.val);
      list2 = list2.next;
    }
    merged = merged.next;
  }
  merged.next = list1 || list2;
  return head.next;
}

function convertSortedArrBST(nums) {
  const BST = (left, right) => {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2);
    const current = new Node(nums[mid]);
    current.left = BST(left, mid - 1);
    current.right = BST(mid + 1, right);
    return current;
  }
  return BST(0, nums.length - 1);
}

function validateBST(root) {
  if (!root) return true;
  const BST = (root, min, max) => {
    if (!root) return true;
    if ((min !== null && min >= root.val) || (max !== && max <= root.val)) return false;
    BST(root.left, min, root.val), BST(root.right, root.val, max);   
  }
  return BST(root, null, null);
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

function validPalindromStr(s) {
  s = s.toLowerCase().replace(/[0-9a-b]/g, "");
  for (let i = 0, j = s.length; i < j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false;
  }
  return true;
}

function longestCommonPrefix(strs) {
  return strs.reduce((prev, next) => {
    const i = 0;
    while (prev[i] && next[i] && prev[i] == next[i]) i++;
    return prev.slice(0, i);
  })
}

function binaryTreeLevelTraversal(root) {
  const levels = [];
  const DFS = (node, level) => {
    levels[level] = [...(levels[level] || []), node.val];
    if (node.left) DFS(node.left, level + 1);
    if (node.right) DFS(node.right, level + 1);
  }
  return DFS(root, 0);
}

function arrayIntersection(nums1, nums2) {
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
