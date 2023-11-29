function productExceptSelf(nums) {
  const result = [];
  let left = 1;
  let right = 1;

  for (let i = nums.length - 1; i >= 0; i--){
    result[i] = right;
    right *= nums[i];
  };
  for (let j = 0; j < nums.length; j++) {
    result[j] *= left;
    left *= nums[j];
  }
  return result;
}

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

function groupAnagrams(strs) {
  let obj = {};
  for (let str of strs) {
    let letters = str.split("").sort().join("");
    obj[letters] ? obj[letters].push(str) : obj[letters] = [str];
  }
  return Object.values(obj);
}

function topKFrequent(nums, k) {
  const freq = new Map();
  const bucket = [];
  const result = [];
  
  for (let num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  for (let [num, f] of freq) {
    bucket[f] = (bucket[f] || new Set()).add(num);
  }
  for (let i = bucket.length - 1; i >= 0; i--){
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }
  return result;
}

function groupAnagrams(strs) {
  let result = {};
  for (let str of strs) {
    let letters = str.split("").sort().join("");
    result[letters] ? result[letters].push(str) : result[letters] = [str];
  }
  return Object.values(result);
}

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
