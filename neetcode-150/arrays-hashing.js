/*
#1: Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

var groupAnagrams = function(strs) {
    let obj = {};
    for (let str of strs) {
        let letters = str.split("").sort().join("");
        obj[letters] ? obj[letters].push(str) : obj[letters] = [str];
    }
    return Object.values(obj);
};
// Time: O(n * k log(k)) where n is the length of the input array and k is the max length of a string
// Space: O(n)

/*
#2: Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements. 
You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
*/

function topKFrequent(nums, k) {
  const freqMap = new Map();
  const bucket = [];
  const result = [];
  
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }
  for (let [num, freq] of freqMap) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }
  // For each entry, it uses the frequency (freq) as an index to store the numbers with that frequency in the bucket array.
  // Each entry in bucket is a Set containing numbers with the same frequency.
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }
  // Finally, it iterates through the bucket array in reverse order (from higher frequencies to lower).
  return result;
}

/*
#3: Product of Array Except Self
Given an integer array nums, return an array answer such that answer[i] is equal to the 
product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
*/

function productExceptSelf(nums) {
  const answer = [];
  let leftMult = 1;
  let rightMult = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] = rightMult;
    rightMult *= nums[i];
  } // [24, 12, 4, 1]
  // After this pass, answer contains the product of all elements to the right of each element.
  for (let j = 0; j < nums.length; j++) {
    answer[j] *= leftMult;
    leftMult *= nums[j]; 
  } // [24, 12, 8, 6]
  // At each step, it multiplies answer[j] by the product of all elements to the left of nums[j]. 
  // leftMult keeps track of the product of elements encountered so far.
  return answer;
};

/*
#4: Longest Consecutive Sequence

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
*/

function longestConsecutive(nums) {
  if (nums == null || nums.length === 0) return 0;
  const set = new Set(nums);
  let max = 0;

  for (let num of set) {
    if (set.has(num - 1)) continue;
    let currNum = num, currMax = 1;

    while (set.has(currNum + 1)) {
      currNum++, currMax++;
    }
    max = Math.max(max, currMax);
  }
  return max;
}
