/*
#1:
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
On each day, you may decide to buy and/or sell the stock. 
You can only hold at most one share of the stock at any time. 
However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
*/

var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
  return profit;
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
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. 
The remaining elements of nums are not important as well as the size of nums.
Return k.
*/

var removeDuplicates = function(nums){
  let count = 1;
  for(let i = 1; i < nums.length; i++){
    if(nums[i - 1] != nums[i]){
      nums[count] = nums[i];
      count++;
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

var rotate = function (nums, k) {
  k %= nums.length;

  let reverse = function (i, j) {
    while (i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  };
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
}; // O(n) time, O(1) space

/*
So there is a simple way to solve this using unshift and pop with a while loop, but that ends
up being an inefficient slow solution, so a great way to solve this is creating a reverse method.
First, we reverse the whole array, then we reverse the first section, and then the last section of
the array.
*/

/*
#4: "Contains Duplicate"

Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
*/

var containsDuplicate = function (nums) {
  nums.sort();
  let duplicates = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) {
      duplicates = true;
    }
  }
  return duplicates;
}; // O(n log n) time, O(1) space (Brute Force)

var containsDuplicate = function(nums){
  const numSet = new Set();
  for (const num of nums) {
    if (numSet.has(num)) return true;
    numSet.add(num);
  }
  return false;
}; // O(n) time, O(1) space

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

var singleNumber = function (nums) {
  let singular = 0;
  for (let i = 0; i < nums.length; i++) {
    singular ^= nums[i];
  }
  return singular;
}; 

function unique(nums){
  const set = new Set();
  for (let num of nums) set.has(num) ? set.delete(num) : set.add(num);
  return set.values().next().value;
}; // O(n), O(1)

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

Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must appear as many times as it shows in both arrays and
you may return the result in any order.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
*/

var intersect = function (nums1, nums2) {
  let intersection = [];
  for (let i = 0; i < nums1.length; i++) {
    nums2.includes(nums1[i]) ? intersection.push(nums1[i]) : undefined;
  }
  return intersection;
}; // O(n * m) time

/* Faster solution */
var intersect = function (nums1, nums2) {
  const frequency = {};
  const intersection = [];

  for (let num of nums1) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  for (let num of nums2) {
    if (frequency[num] > 0) {
      intersection.push(num);
      frequency[num]--;
    }
  }

  return intersection;
}; // O(n + m) time, O(n) space

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

/* 
#7: "Plus One"

You are given a large integer represented as an integer array digits, 
where each digits[i] is the ith digit of the integer. 
The digits are ordered from most significant to least significant in left-to-right order. 
The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
*/

var plusOne = function (digits) {
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += carry;
    carry = Math.floor(digits[i] / 10);
    digits[i] %= 10; // modulo operator to get the remainder. divides then gets remainder.
  }

  if (carry) {
    digits.unshift(carry);
  }

  return digits;
}; // O(n) time, O(1) space

/* 

So first I would solve this by converting the array of numbers to an integer
using .join(). I originally had parseInt() but found out BigInt is faster.
We convert this to a string and then can iterate through each character of
that string with a for loop, pushing each digit to a new array.

*/

/* 
#8: Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining
the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.


Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

var moveZeroes = function (nums) {
  let diff = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      diff++;
    } else {
      [nums[i - diff], nums[i]] = [nums[i], nums[i - diff]];
    }
  }
}; // O(n) time, O(1) space
 
/*
My original answer for this only passed half the tests, but after delving into other peoples answers
I saw how I needed to rethink the shifting of the array elements.
We are being very performance efficient by redeclaring the array index of the element we are on with the
next.
*/

/*
#9: "Two Sum"

Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, 
and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

var twoSum = function (nums, target) {
  const differences = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in differences) return [i, differences[diff]];
    differences[nums[i]] = i;
  }
}; // O(n) time, O(n) space
// So, adding differences[2] = 0 will create a property in the 
// differences object with the key "2" and the value 0, but its 
// position in the object's internal storage isn't determined by the 
// numerical index.

// In the worst case scenario, when there are no repeating values in the nums array, 
// every unique value will be stored in the differences map. 
// This means that the size of the map will be proportional to the size of the input nums array, 
// resulting in a space complexity of O(n).

/*

So first we want to create a 'differences' object to store key/value pairs of the value and its index in the array.
We iterrate through the nums array, and if the current difference is found in our object, we return the indices. 
If not, then we continue iterating until all elements have been checked.

*/

/*
#10: "Valid Sudoku"

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
*/

var isValidSudoku = function (board) {
  const set = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) { // board[0].length just to make it more adaptable to other boards, but can be 9 for standard sudoku
      const value = board[i][j];

      if (value !== ".") {
        const row = `${value} at row ${i}`;
        const column = `${value} at col ${j}`;
        const box = `${value} at box ${Math.floor(i / 3)}, ${Math.floor(
          j / 3
        )}`;

        if (set.has(row) || set.has(column) || set.has(box)) {
          return false;
        } else {
          set.add(row);
          set.add(column);
          set.add(box);
        }
      }
    }
  }
  return true;
}; // O(1) time, O(1) space
//Since the number of iterations and the complexity of operations within each iteration are 
//constant regardless of the size of the input, the overall time complexity is constant, O(1).

/* 

I had to get some help with this one, but it turned out simpler than I thought.
The trick is to use a Set(), since Sets can only hold unique values.
We initialize a set, then use two for-loops to check the row then the column for each value of that row.
The value parameter will change per iteration, and check if it is in each i and j, row or column, and even
the box by splitting up the row and colummns by dividing by 3.
If they don't exist in the set, they are added. 

It's really not that complicated, it's just about setting up the right way of logging these rows, columns, and boxes,
so that we can check if they exist or not.

*/

/*
#11: "Rotate Image"

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
DO NOT allocate another 2D matrix and do the rotation.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
*/

var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  } // first forloop will flip the rows into columns, using j to take each rows item to put it in another row.

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length / 2; j++) { // JS rounds down 1.5 to 1. You only want to do 'half' so you dont undo the reversing, or you can just do j < 1.
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix[0].length - j - 1];
      matrix[i][matrix[0].length - j - 1] = temp;
    }
  } // shift all the column items to the left
};

/*
This one's quite complex. So first of all, it's pretty easy to see the pattern visually to where the rows and 
cols will need to switch. But the method can be done in a few different ways. The first for-loop will swap the 
rows with the columns basically, then the second will just reverse all of the rows.
*/
