/*
#1:
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
*/

var maxProfit = function(prices) {
    let profit = 0;
    for(let i = 1; i < prices.length; i++){
        if (prices[i] > prices[i - 1]){
            profit += prices[i] - prices[i - 1];
        }
    }
    return profit
};

/*
A simple method to tackling this array function is to use a for loop to run through the array
and compare each item to the previous item, and if it is greater than the previous item, you 
would add it to a variable. This way you are only buying and selling if you see that there is
a profitable difference. Then you would just return the profit variable which totalled the
overall difference.
*/

/*
#2:
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
*/

var removeDuplicates = function(nums) {
    let count = 1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i - 1] != nums[i]){
            nums[count] = nums[i]; 
            count++
        }
    }
    return count;
};

/*
In order to change the original nums array, I am going to use a for-loop.

I will set a count variable at 1 to use as my index checker, and increase it for each time through the loop.

Since the array is already in non-decreasing order, I can just check each array item to see if the previous

array item is the same, and if they aren't the same then redeclaring that item with the current index.

Then I will finish by returning count.
*/

/*
#3:
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

/*
#4: "Contains Duplicate"

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


Example 1:

Input: nums = [1,2,3,1]
Output: true
*/

var containsDuplicate = function(nums) {
    nums.sort()
    let duplicates = false
    for (let i = 0; i < nums.length; i++){
        if(nums[i] == nums[i - 1]){
            duplicates = true
        }
    }
    return duplicates
};

/* 

First we can sort the array of numbers so that if there are duplicates,
they will be next to eachother. That will allow us to run through the array
with a for-loop and check if any duplicates are next to eachother by comparing
the current array item with the previous item.

*/

/*
#5: "Single Number"

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.


Example 1:

Input: nums = [2,2,1]
Output: 1
*/

var singleNumber = function(nums){
    let singular = 0
    for (let i = 0; i < nums.length; i++){
        singular ^= nums[i]
    }
    return singular
};

/* 

So my first solution was to sort() the array, to then compare the prev and next 
integer with conditionals, but found that using an XOR operation sped up the process
by removing the time of sorting. 

We start by initializing the singular variable, then iterate through the array
with a for loop. Then we use the XOR operator to compare each integer to the rest in the array,
and the XOR will not overwrite the variable when there is a single instance of an integer.
XORing a number with itself results in 0, and XORing 0 with any number gives the number itself.
*/

/*
#6: "Intersection of Two Arrays II"

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.


Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
*/

var intersect = function(nums1, nums2){
    let intersection = [];
    for (let i = 0; i < nums1.length; i++){
        nums2.includes(nums1[i]) ? intersection.push(nums1[i]) : undefined
    }
    return intersection
};

    /* Faster solution */
    var intersect = function(nums1, nums2){
        const frequency = {};
        const intersection = [];

        for (let num of nums1){
            frequency[num] = (frequency[num] || 0) + 1;
        }
    
        for (let num of nums2){
            if (frequency[num] > 0){
                intersection.push(num);
                frequency[num]--;
            }
        }
        
        return intersection;
    };

/* 
So my first solution used a for loop and the includes method to compare the two arrays
integers and push to an array variable when they intersect.

But I found a faster solution that doesnt have to use the includes method.
We initialize a frequency object and an intersection array. Then, we use a for-of loop
to find the frequency of each integer in nums1 and a for-of to run through nums2 and
push any integer that intersects with nums1. We use the frequency object to iterate
through the for-of that many times, then use the deduction operator on that frequency,
allowing us to push the proper amount of integer duplicates.
*/