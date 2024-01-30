/*
#1: Two Sum II - Input Array Is Sorted

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
find two numbers such that they add up to a specific target number. 
Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.

Return the indices of the two numbers, index1 and index2, 
added by one as an integer array [index1, index2] of length 2.
The tests are generated such that there is exactly one solution. You may not use the same element twice.
Your solution must use only constant extra space.

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
*/

function twoSumII(numbers, target) {
  let [left, right] = [0, numbers.length - 1];
  while (left < right) {
    const sum = numbers[left] + numbers[right];

    const isTarget = sum === target;
    if (isTarget) return [left + 1, right + 1];

    const isTargetGreater = sum < target;
    if (isTargetGreater) left++;

    const isTargetLess = target < sum;
    if (isTargetLess) right--;
  }
  return [-1, -1];
}
// Time: O(n)
// Space: O(1)

/*
#2: 3Sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
*/

function threeSum(nums) {
  const results = [];
  nums.sort((a, b) => a - b); // necessary for two pointers technique

  for (let i = 0; i < nums.length; i++){
    const a = nums[i];
    if (a > 0) break; // if asc sort, if positive then remaining elements will be positive
    if (i > 0 && a === nums[i - 1]) continue; // pass duplicates

    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const threeSum = a + nums[l] + nums[r];
      if (threeSum > 0) {
        r--;
      } else if (threeSum < 0) {
        l++;
      } else {
        results.push([a, nums[l], nums[r]]);
        l++, r--;
        while (nums[l] === nums[l - 1] && l < r) { // keep going, and avoid duplicates
          l++;
        }
      }
    }
  }
  return results;
}
// Time: O(n log n) because of sorting
// Space: O(n^2) worst case due to potential number of triplets, additional space used for results arr

/*
#3: Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that 
the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains 
the most water. Return the maximum amount of water a container can store.
Notice that you may not slant the container.

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) the container can contain is 49.
*/

function maxArea(height) {
  const res = 0;
  let l = 0, r = height.length - 1;
  while (l < r) {
    const area = (r - l) * Math.min(height[l], height[r]);
    res = Math.max(res, area);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return res;
}

// Time: O(n)
// Space: O(1)

/*
#4: Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1,
compute how much water it can trap after raining.

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
In this case, 6 units of rain water (blue section) are being trapped.
*/

function trap(height) {
  const maxLeft = [];
  const maxRight = [];
  const minLeftRight = [];

  let current = 0;
  for (let i = 0; i < height.length; i++) {
    maxLeft.push(current);
    current = Math.max(current, height[i]);
  }
  current = 0;
  for (let i = height.length - 1; i > -1; i--) {
    maxRight.push(current);
    current = Math.max(current, height[i]);
  }
  maxRight.reverse();
  for (let i = 0; i < height.length; i++) {
    const minofLeftRight = Math.min(maxLeft[i], maxRight[i]);
    minLeftRight.push(minofLeftRight);
  }
  let water = 0;
  for (let i = 0; i < height.length; i++) {
    if (minLeftRight[i] - height[i] > 0) {
      water += minLeftRight[i] - height[i];
    }
  }
  return water;
}
// Time: O(n)
// Space: O(n)
