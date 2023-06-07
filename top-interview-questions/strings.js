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
