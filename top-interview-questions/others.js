/*
#1: Number of 1 Bits

Write a function that takes the binary representation of an unsigned integer and returns 
the number of '1' bits it has (also known as the Hamming weight).

Example 1:

Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
*/

var hammingWeight = function(n) {
  let sum = 0;
  while (n != 0) {
    sum += n & 1; // This bitwise AND operation with 1 checks the least significant bit (LSB) of n. If the LSB is 1, the result is 1; if it's 0, the result is 0.
    n = n >>> 1; // This bitwise right shift operation shifts all bits of n to the right by 1 position. 
                // This essentially drops the previously checked LSB and moves the next bit into the LSB position for the next iteration.
  } // once all 1's have been counted, the while loop terminates.
  return sum;
}; // O(log n) time, O(1) space -- The number of iterations is proportional to the number of bits set to 1 in the binary 
// representation of the input, which is log₂(n).

/*
#2: Hamming Distance

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
Given two integers x and y, return the Hamming distance between them.

Example 1:

Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
*/

var hammingDistance = function(x, y) {
  return (x ^ y).toString(2).replace(/0/g, '').length;
} // O(log(max(x,y))) time and space

// It calculates the bitwise XOR (^) between x and y. This operation results in a new integer where the 
// bits are set to 1 where the bits in x and y are different and 0 where they are the same.
// The result of the XOR operation is then converted to a binary string using .toString(2). 
// This binary string will contain '1's at positions where x and y had different bits and '0's where they had the same bits.
// The .replace(/0/g, '').length part of the code counts the number of '1's in the binary string by using a regular expression
// to remove all '0's and then calculates the length of the resulting string. This gives you the count of differing bits, which is the Hamming distance.


/*
#3: Reverse Bits

Reverse bits of a given 32 bits unsigned integer.

Example 1:

Input: n = 00000010100101000001111010011100
Output:    964176192 (00111001011110000010100101000000)
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
*/

var reverseBits = function(n) {
  let result = 0;
  let count = 32;

  while (count--) {
    result *= 2; // The doubling of the result essentially makes room for the next bit to be added in its proper place, 
                // effectively shifting the bits to the left.
    result += n & 1;
    n = n >> 1;
  }
  return result;
}; // O(1) time and space

//Inside the function:
//result is initialized to 0. This variable will store the reversed binary representation of the input integer.
//count is initialized to 32, which is the number of bits in a 32-bit integer.
//The function enters a while loop that iterates 32 times (once for each bit in the integer):
//Inside the loop:
//result *= 2 shifts the bits of the result to the left by 1 position. This effectively multiplies result by 2, 
//which is the same as shifting all bits to the left by one position.
//result += n & 1 adds the least significant bit (LSB) of n to the result. This effectively appends the current bit of n to the rightmost side of the result.
//n = n >> 1 shifts the bits of n to the right by 1 position, effectively removing the LSB. This prepares n for the next iteration to process the next bit.


/*
#4: Pascal's Triangle

Given an integer numRows, return the first numRows of Pascal's triangle.

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
*/

var generate = function(numRows) {
  if (!numRows || numRows <= 0) return [];
  const pascal = [[1]];
  
  for (let i = 1; i < numRows; i++) {
    const prevRow = pascal[pascal.length - 1];
    const shiftLeft = [...prevRow, 0];
    const shiftRight = [0, ...prevRow];
    const currentRow = shiftLeft.map((r, i) => r + shiftRight[i]);
    pascal.push(currentRow);
  }
  return pascal;
};

//Inside the function:
//The code first checks whether numRows is falsy or less than or equal to 0. 
//If this condition is true, an empty array is returned. This handles cases where numRows is not a valid positive integer.
//The variable pascal is initialized as a 2D array with the first row containing a single element, [1]. This represents the first row of Pascal's Triangle.
//The function enters a for loop that iterates from 1 up to numRows - 1. This loop is responsible for generating the remaining rows of Pascal's Triangle.
//Inside the loop:
//prevRow stores the last row generated in the pascal array.
//shiftLeft and shiftRight are arrays created by adding a 0 to the beginning or end of prevRow, respectively. 
//This is done to simulate the shifting of elements for calculating the next row.
//currentRow is generated by iterating through the shiftLeft array and adding the corresponding elements from shiftRight array. This step effectively calculates the new values for the current row based on the previous row.
//The calculated currentRow is pushed to the pascal array, adding a new row to the triangle.
//After all the rows have been generated, the pascal array containing the entire triangle is returned.


/*
#5: Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"
Output: true
*/

var isValid = function(s) {
  let map = {
    ")": "(",
    "]": "[",
    "}": "{"
  };
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      arr.push(s[i]);
    } else {
      if (arr[arr.length - 1] === map[s[i]]) {
        arr.pop();
      } else return false;
    }
  }
  return arr.length === 0;
};

/*
#6: Missing Number

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
*/

var missingNumber = function(nums) {
  let sum = 0, total = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    total += i + 1;
  }
  return total - sum;
}; // wow.
