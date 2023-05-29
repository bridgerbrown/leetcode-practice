/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/

var rotate = function(nums, k) {
    k %= nums.length 
     
    let reverse = function(i, j){
     while(i < j){
         let temp = nums[i]
         nums[i] = nums[j]
         nums[j] = temp
         i++
         j--
     }
    }
    reverse(0, nums.length - 1);
    reverse(0, k - 1)
    reverse(k, nums.length - 1)
 };

console.log(rotate([1,2,3,4,5], 3))

/*
So there is a simple way to solve this using unshift and pop with a while loop, but that ends
up being an inefficient slow solution, so a great way to solve this is creating a reverse method.
First, we reverse the whole array, then we reverse the first section, and then the last section of
the array.
*/