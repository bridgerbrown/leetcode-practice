function mergeLLs(list1, list2) {
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

function convertsortedarrbst(nums) {
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

function arrayintersection(nums1, nums2) {
  const freq = {};
  const intersection = [];
  for (let num of nums1) {
    freq[num] = (...freq[num] || 0) + 1;
  }
  for (let num of nums2) {
    if (freq[num] > 0) {
      intersection.push(num);
      freq[num]--;
    }
  }
  return intersection;
}

function firstuniquecharstr(s) {
  const freq = {};
  for (const char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let i = 0; i < s.length; i ++) {
    if (freq[s[i]] === 1) return i;
  }
  return -1;
}

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
