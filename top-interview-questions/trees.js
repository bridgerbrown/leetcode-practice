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
