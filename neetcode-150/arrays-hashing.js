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
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }
  return result;
}
