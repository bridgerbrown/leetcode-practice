/*
#1: Binary Search

Given an array of integers nums which is sorted in ascending order, and an 
integer target, write a function to search target in nums. If target exists,
then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
*/

function search(nums, target) {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    if (nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

/*
#2: Search a 2D Matrix

You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Example 1:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
*/

function searchMatrix(matrix, target) {
  let [rows, cols] = [matrix.length, matrix[0].length];
  let [top, bot] = [0, rows - 1];

  while (top <= bot) {
    let row = Math.floor((top + bot) / 2);
    if (target > matrix[row][cols - 1]) {
      top = row + 1;
    } else if (target < matrix[row][0]) {
      bot = row - 1;
    } else {
      break;
    }
  }

  if (!(top <= bot)) return false;

  let row = Math.floor((top + bot) / 2);
  let [l, r] = [0, cols - 1];
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (target > matrix[row][m]) {
      l = m + 1;
    } else if (target < matrix[row][m]) {
      r = m - 1;
    } else if (target == matrix[row][m]) {
      return true;
    }
  }
  return false;
}

/*
#3: Koko Eating Bananas
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. 
The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile 
of bananas and eats k bananas from that pile. If the pile has less than k bananas,
she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.

Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4
*/

function minEatingSpeed(piles, h) {
  let [l, r] = [1, Math.max(...piles)];
  while (l < r) {
    const mid = (l + r) / 2;
    const hSpent = 0;
    for (const pile of piles) {
      hSpent += Math.ceil(pile / mid);
    }
    if (h < hSpent) l = mid + 1;
    if (h >= hSpent) r = mid;
  }

  return r;
}
// Time O(N * log(M)) | Space O(1)

/*
#4: Find Minimum in Rotated Sorted Array

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
*/

function findMin(nums) {
  let [l, r] = [0, nums.length - 1];
  
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    
    if (nums[l] < nums[r]) { // special case if arr is not rotated, skipping all other logic
      return nums[l];
    } else if (nums[l] <= nums[mid]) {
      l = mid + 1;
    } else if (nums[mid] < nums[l]) {
      r = mid;
    }
  }
  return nums[l];
}
