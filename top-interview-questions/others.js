/*
#1: Number of 1 Bits

Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Example 1:

Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
*/

var hammingWeight = function(n) {
  let sum = 0;
  while (n != 0) {
    sum += n & 1;
    n = n >>> 1;
  }
  return sum;
};

// Within the loop:
// n & 1 is used to check if the least significant bit (LSB) of n is set to 1. The bitwise AND operation (&) with 1 checks whether the LSB is 1 or 0. If it's 1, then n & 1 evaluates to 1; otherwise, it evaluates to 0.
// sum += n & 1 increments the sum variable by 1 if the LSB of n is 1. This is how the function counts the '1' bits.
// After checking the LSB and updating the sum, n is shifted to the right by one position using the bitwise right shift operator (>>>). This shifts the bits to the right, effectively removing the LSB. This prepares n for the next iteration to check the next bit.


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
}

//Inside the function:
//(x ^ y) uses the bitwise XOR operation (^) between x and y. XOR returns a number where each bit is set to 1 if the corresponding bits in the operands are different, and 0 if they are the same. So, the result of (x ^ y) will have '1' bits in positions where x and y have different bits.
//.toString(2) converts the result of the XOR operation to its binary representation. This step is necessary to work with the individual bits.
//.replace(/0/g, '').length is used to calculate the Hamming distance:
//replace(/0/g, '') removes all '0' bits from the binary string. This effectively leaves only the '1' bits, which represent the positions where the corresponding bits in x and y were different.
//.length returns the count of remaining '1' bits, which is the Hamming distance.

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
    result *= 2;
    result += n & 1;
    n = n >> 1;
  }
  return result;
};

//Inside the function:
//result is initialized to 0. This variable will store the reversed binary representation of the input integer.
//count is initialized to 32, which is the number of bits in a 32-bit integer.
//The function enters a while loop that iterates 32 times (once for each bit in the integer):
//Inside the loop:
//result *= 2 shifts the bits of the result to the left by 1 position. This effectively multiplies result by 2, which is the same as shifting all bits to the left by one position.
//result += n & 1 adds the least significant bit (LSB) of n to the result. This effectively appends the current bit of n to the rightmost side of the result.
//n = n >> 1 shifts the bits of n to the right by 1 position, effectively removing the LSB. This prepares n for the next iteration to process the next bit.


/*
#4: Pascal's Triangle

Given an integer numRows, return the first numRows of Pascal's triangle.

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
*/
