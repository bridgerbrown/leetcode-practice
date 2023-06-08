/*
#1: "Reverse String"

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

*/

var reverseString = function (s) {
  s.reverse();
};

var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = s[left];

    left++;
    right--;
  }
};

/*

So the very simple solution is the reverse() method, which actually seems to be pretty
performance efficient, but I wanted to explore a more in-depth solution. I used this 
approach in a previous array problem. It swaps the letters at each ends of the array until
it reaches the middle and the two pointers meet.

*/

/*
#2: "Reverse Integer"

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321

*/

var reverse = function (x) {
  const reversedAbsolute = Math.abs(x).toString().split("").reverse().join("");
  if (reversedAbsolute > 2 ** 31) return 0;
  return reversedAbsolute * Math.sign(x);
};

/*

I first tried to brute force my solution but got stuck, and looked for help and learned a few new things.
I didnt know about '**', '.sign()', or '.abs()'. I had a similar answer but without the conditional bit check.

*/

/*
#3: "First Unique Character in a String"

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
*/

var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    let character = s.charAt(i);
    if (s.indexOf(character) == i && s.indexOf(character, i + 1) == -1) {
      return s.indexOf(character);
    }
  }
  return -1;
};

/*

I learned the impact of indexOf and charAt when trying to solve this problem. 

*/

/*
#4: "Valid Anagram"
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
*/

var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

/*
#5: "Valid Palindrom"

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/

var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false;
  }
  return true;
};

/*
#6: "String to Integer (atoi)"

Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.
Note:

Only the space character ' ' is considered a whitespace character.
Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
 

Example 1:

Input: s = "42"
Output: 42
Explanation: The underlined characters are what is read in, the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
         ^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "42" ("42" is read in)
           ^
The parsed integer is 42.
Since 42 is in the range [-231, 231 - 1], the final result is 42.
*/

var myAtoi = function (s) {
  return Math.max(-(2 ** 31), Math.min(2 ** 31 - 1, parseInt(s) || 0));
};

/*
I had a much more inefficient complex answer than this, but I saw this solution from someone else
and had to learn how it worked. A lot of answers were much much longer, and the simplicity of this one
is amazing. After looking into it, it really shows the power of parseInt(). It takes care of the whitespace,
the sign, the converting, and the end of the digit input. Then I learned how you can get a clamped
answer using the Math.min and Math.max, by having it return between the integers you give. Also,
parseint will return 'NaN' if no number in input, but the or operator to zero handles that case.
All in all, handling the whole problem with one line of code is awesome. 

It does take 92ms, so it may not be the most memory efficient but still.
*/

/*
#7: "Implement strStr()"

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
*/

var strStr = function (haystack, needle) {
  if (!needle.length) return 0;
  if (!haystack.includes(needle)) return -1;
  return haystack.split(`${needle}`)[0].length;
};

/*
#8: "Longest Common Prefix"
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"


*/

var longestCommonPrefix = function (strs) {
  if (strs === undefined || strs.length === 0) {
    return "";
  }

  return strs.reduce((prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  });
};
