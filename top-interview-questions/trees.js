/*
#1: Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Input: root = [3,9,20,null,null,15,7]
Output: 3
*/

var maxDepth = function(root) {
  if (!root) return null;
  let max = Math.max(maxDepth(root.left), maxDepth(root.right));
  return max + 1;
}


/*
#2: Validate Binary Search Tree

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
*/

var isValidBST = function(root) {
  if (!root) return true;

  function recursiveCheck(root, min, max) {
    if (!root) return true;
    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) return false;
    return recursiveCheck(root.left, min, root.val) && recursiveCheck(root.right, root.val, max);
  }

  return recursiveCheck(root, null, null);
};


/*
#3: Symmetric Tree

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Input: root = [1,2,2,3,4,4,3]
Output: true
*/

var isSymmetric = function(root) {
  if (!root) return true;

  function DFS(left, right) {
    if (!left && !right) return true;
    if (left && !right || !left && right || left.val !== right.val) return false;
    return DFS(left.right, right.left) && DFS(left.left, right.right);
  };

  return DFS(root.left, root.right);
};

/*
#4: Binary Tree Level Order Traversal

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
*/

var levelOrder = function(root) {
  const results = [];
  if (!root) return results;

  function DFS(node, level) {
    results[level] = [...(results[level] || []), node.val];
    if (node.left) DFS(node.left, level + 1);
    if (node.right) DFS(node.right, level + 1);
  }
  DFS(root, 0);

  return results;
};

/*
#5: Convert Sorted Array to Binary Search Tree

Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted
*/

var sortedArrayToBST = function(nums) {
  function BST(left, right) {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2);
    const current = new TreeNode(nums[mid]);
    current.left = BST(left, mid - 1);
    current.right = BST(mid + 1, right);
    return current;
  };
  return BST(0, nums.length - 1);
};
