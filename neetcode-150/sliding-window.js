/*
#1: Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring
without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

function lengthOfLongestSubstring(s) {
  let set = new Set();
  let left = 0;
  let maxSize = 0;

  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[i]);
    maxSize = Math.max(maxSize, i - left + 1);
  }
  return maxSize;
}
// Time: O(n)
// Space: O(min(n, m)) where m is the size of the char set

/*
#2: Longest Repeating Character Replacement

You are given a string s and an integer k. 
You can choose any character of the string and change it to any other 
uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter 
you can get after performing the above operations.

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
*/

function characterReplacement(s, k) {
  let results = 0;
  let count = new Map();
  let l = 0;
  
  for (let r = 0; r < s.length; r++) {
    let len = r - l + 1;
    count.set(s[r], 1 + (count.get(s[r]) || 0));

    if ((len - Math.max(...count.values())) > k) {
      count.set(s[l], count.get(s[l]) - 1);
      l++;
    }
    len = r - l + 1;
    results = Math.max(results, len);
  }
  return results;
}
// Time: O(n)
// Space: O(1)

/*
#3: Permutation in String

Given two strings s1 and s2, return true if s2 contains a permutation of s1,
or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
*/

function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;
  let neededChar = {};
  for (let i = 0; i < s1.length; i++) {
    neededChar[s1[i]] = (neededChar[s1[i]] || 0) + 1;
  }
  let left = 0, right = 0, requiredLength = s1.length;
  while (right < s2.length) {
    if (neededChar[s2[right]] > 0) requiredLength--;
    neededChar[s2[right]]--;
    right++;
    if (requiredLength === 0) return true;
    if (right - left === s1.length) {
      if (neededChar[s2[left]] >= 0) requiredLength++;
      neededChar[s2[left]]++;
      left++;
    }
  }
  return false;
}
// Time: O(n)
// Space: O(1)
