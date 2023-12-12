function firstUniqueInStr(s) {
  const freq = {};
  for (const char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) return i;
  }
  return -1;
}

function sortedArrToBST(nums) {
  function BST(left, right) {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2);
    const curr = new Node(nums[mid]);
    curr.left = BST(left, mid - 1);
    curr.right = BST(mid + 1, right);
    return curr;
  }
  return BST(0, nums.length - 1);
}

function unique(nums) {
  const set = new Set();
  for (let num of nums) set.has(num) ? set.delete(num) : set.add(num);
  return set.values().next().value;
}

function maxDepth(root) {
  if (!root) return null;
  let max = Math.max(maxDepth(root.left), maxDepth(root.right));
  return max + 1;
}
