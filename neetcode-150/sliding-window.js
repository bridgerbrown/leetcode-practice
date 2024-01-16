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

function longestRepeatingChar(s, k) {
  // Initialize variables
  let result = 0;           // To store the length of the longest repeating substring
  let count = new Map();    // To store the count of characters in the current window
  let left = 0;             // Left pointer for the sliding window

  // Iterate over the string using the right pointer
  for (let right = 0; right < s.length; right++) {
    // Calculate the length of the current window
    let wind = right - left + 1;

    // Update the count of the character at the right pointer
    count.set(s[right], (count.get(s[right]) || 0) + 1);

    // Check if the number of characters outside the most frequent character
    // exceeds the allowed replacements (k)
    if ((wind - Math.max(...count.values())) > k) {
      // Move the left pointer to shrink the window
      count.set(s[left], count.get(s[left]) - 1);
      left++;
    }

    // Recalculate the window length after potential shrinking
    wind = right - left + 1;

    // Update the result with the maximum window length
    result = Math.max(result, wind);
  }

  // Return the length of the longest repeating substring
  return result;
}

// Time: O(n)
// Space: O(1)
// The core idea is to maintain a valid window by adjusting the left pointer
// whenever the number of replacements required exceeds the allowed limit (k).

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
  // Step 1: Length Check
  // If the length of s1 is greater than s2, it's not a permutation
  if (s1.length > s2.length) return false;

  // Step 2: Character Frequency Map
  // Create a frequency map (neededChar) for characters in s1
  let neededChar = {};
  for (let i = 0; i < s1.length; i++) {
    neededChar[s1[i]] = (neededChar[s1[i]] || 0) + 1;
  }

  // Step 3: Sliding Window Technique
  // Initialize pointers (left and right) and requiredLength
  let left = 0, right = 0, requiredLength = s1.length;
  while (right < s2.length) {
    // Update requiredLength and frequency map based on the current character
    if (neededChar[s2[right]] > 0) requiredLength--;
    neededChar[s2[right]]--;
    right++;

    // Step 4: Check for Permutation
    // If requiredLength becomes zero, s1 is a permutation in the current window
    if (requiredLength === 0) return true;

    // Step 5: Adjust Window Size
    // If the window size equals the length of s1, adjust the window
    if (right - left === s1.length) {
      // Restore frequency map and requiredLength
      if (neededChar[s2[left]] >= 0) requiredLength++;
      neededChar[s2[left]]++;
      left++;
    }
  }

  // Step 6: Result
  // If no permutation is found, return false
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
  // Initialize variables for the minimum window (min), left and right pointers
  let min = "", left = 0, right = -1;
  
  // Create a frequency map (map) for characters in string t
  let map = {};
  t.split('').forEach(element => {
    // Increment the frequency count or initialize to 1
    map[element] ? map[element] = map[element] + 1 : map[element] = 1;
  });

  // Count of unique characters needed in the window
  let count = Object.keys(map).length;

  // Sliding Window Technique
  while (right <= s.length) {
    // Step 1: Check if a valid window is found (count == 0)
    if (count == 0) {
      // Step 2: Shrink the Window (Move the left pointer)
      let current = s[left];
      if (map[current] != null) map[current]++;
      if (map[current] > 0) count++;

      // Get the current substring
      let temp = s.substring(left, right + 1);

      // Step 3: Update the Minimum Window
      if (min == "") min = temp;
      else min = min.length < temp.length ? min : temp;
      
      left++;
    } else {
      // Step 4: Expand the Window (Move the right pointer)
      right++;
      let current = s[right];
      if (map[current] != null) map[current]--;
      if (map[current] == 0) count--;
    }
  }

  // Step 5: Return the Minimum Window found during the sliding window process
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
  // Step 1: Initialize two arrays, q for storing indices and res for storing results
  const q = [];
  const res = [];

  // Step 2: Iterate through the nums array
  for (let i = 0; i < nums.length; i++) {
    // Step 3: Maintain a decreasing order in the q array
    while(q.length && nums[q[q.length - 1]] <= nums[i]) {
      q.pop();
    }
    // Push the current index into the q array
    q.push(i);

    // Step 4: Remove the leftmost element if it's out of the window
    if (q[0] === i - k) {
      q.shift();
    }

    // Step 5: Record the maximum element for each window after reaching size k
    if (i >= k - 1) {
      res.push(nums[q[0]]);
    }
  }

  // Step 6: Return the array of maximum elements for each window
  return res;
}
