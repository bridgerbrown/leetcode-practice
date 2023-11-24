function btleveltrav(root) {
  const levels = [];
  const DFS = (node, level) => {
    levels[level] = [...(levels[level] || []), node.val];
    if (node.left) DFS(node.left, level + 1);
    if (node.right) DFS(node.right, level + 1);
    return node;
  }
  DFS(root, 0);
  return levels;
}

function twoSum(nums, target) {
  const differences = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in differences) return [i, differences[diff]];
    differences[nums[i]] = i;
  }
}

function convertarrbst(nums) {
  const BST = (left, right) => {
    const mid = Math.floor((left + right) / 2);
    const current = new Node(nums[mid]);
    current.left = BST(left, mid - 1);
    current.right = BST(mid + 1, right);
    return current;
  }
  return BST(0, nums.length - 1);
}

function longestcommonprefix(strs) {
  return strs.reduce((prev, next) => {
    const i = 0;
    while (prev[i] && next[i] && prev[i] == next[i]) i++;
    return prev.slice(0, i);
  })
}
