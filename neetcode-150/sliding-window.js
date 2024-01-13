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
  let left = 0;
  
  for (let right = 0; right < s.length; right++) {
    let wind = right - left + 1;
    count.set(s[right], 1 + (count.get(s[right]) || 0));

    if ((wind - Math.max(...count.values())) > k) {
      count.set(s[left], count.get(s[left]) - 1);
      left++;
    }
    wind = right - left + 1;
    results = Math.max(results, wind);
  }
  return results;
}
// Time: O(n)
// Space: O(1)
// The core idea is to maintain a valid window by adjusting the left pointer whenever the number of replacements required exceeds the allowed limit (k).

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

/*
#4: Minimum Window Substring

Given two strings s and t of lengths m and n respectively, return the minimum window substring
of s such that every character in t (including duplicates) is included in the window. 
If there is no such substring, return the empty string "".
The testcases will be generated such that the answer is unique.

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
*/

function minWindow(s, t) {
  let min = "", left = 0, right = -1;
  let map = {};

  t.split('').forEach(element => {
    if (map[element] == null) map[element] = 1;
    else map[element] = map[element] + 1;
  });
  
  let count = Object.keys(map).length;

  while (right <= s.length) {
    if (count == 0) {
      let current = s[left];
      if (map[current] != null) map[current]++;
      if (map[current] > 0) count++;
      let temp = s.substring(left, right + 1);
      if (min == "") min = temp;
      else min = min.length < temp.length ? min : temp;
      left++;
    } else {
      right++;
      let current = s[right];
      if (map[current] != null) map[current]--;
      if (map[current] == 0) count--;
    }
  }
  return min;
}

/*
#5: Sliding Window Maximum

You are given an array of integers nums, there is a sliding window of size k which is moving 
from the very left of the array to the very right. You can only see the k numbers in the window. 
Each time the sliding window moves right by one position.
Return the max sliding window.

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
*/

function maxSlidingWindow(nums, k) {
  const q = [];
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    while(q && nums[q[q.length - 1]] <= nums[i]) {
      q.pop();
    }
    q.push(i);
    if (q[0] === i - k) {
      q.shift();
    }
    if (i >= k - 1) {
      res.push(nums[q[0]]);
    }
  }
  return res;
}


