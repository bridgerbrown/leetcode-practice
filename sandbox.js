function numberOf1Bits(n) {
  let count = 0;
  while (n != 0) {
    count += n & 1;
    n >>> 1;
  }
  return count;
}

function longestCommonPrefix(strs){
  if (strs === undefined || strs.length === 0) return "";
  return strs.reduce((prev, next) => {
    const i = 0;
    while (prev[i] && next[i] && prev[i] == next[i]) i++;
    return prev.slice(0, i);
  })
}

function removeNthFromEnd(head, n) {
  let fast = slow = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  if (!fast) return head.next;
  while (fast.next) {
    fast = fast.next, slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
}

function rotateImage(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j ++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    } 
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0] / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix[0].length - j - 1];
      matrix[i][matrix[0].length - j - 1] = temp;
    } 
  }
}

function arrayIntersection(nums1, nums2) {
  let freq = {};
  let intersection = [];
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

function twoSum(nums, target) {
  const differences = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in differences) return [i, differences[diff]];
    differences[nums[i]] = i;
  }
}

function btLevelTraversal(root) {
  if (!root) return [];
  const levels = [];
  const DFS = (root, level) => {
    levels[level] = [...(levels[level] || []), root.val];
    if (root.left) DFS(root.left, level + 1);
    if (root.right) DFS(root.right, level + 1);
  }
  DFS(root, 0);
  return levels;
}

function covertSortedArrBST(nums) {
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

function deleteNodeLL(head, node) {
  let temp = node.next;
  node.val = temp.val;
  node.next = temp.next;
}

function mergeTwoSortedLists(list1, list2) {
  let merged = new Node();
  let head = merged;
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
