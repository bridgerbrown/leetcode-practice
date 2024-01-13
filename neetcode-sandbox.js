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

function productExceptSelf(nums) {
  const answer = [];
  let leftM = 1;
  let rightM = 1;
  for (let i = nums.length - 1; i >= 0; i--){
    answer[i] = rightM;
    rightM *= nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
    answer[j] *= leftM;
    leftM *= nums[j];
  }
  return answer;
}

function groupAnagrams(strs) {
  let obj = {};
  for (let str of strs) {
    let letters = str.split("").sort().join("");
    obj[letters] ? obj[letters].push(str) : obj[letters] = [str];
  }
  return Object.values(obj);
}

function longestSubstringLength(s) {
  let set = new Set();
  let left = 0;
  let maxSize = 0;
  if (s.length === 0 || s.length === 1) return s.length;
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

function charReplacement(s, k) {
  let results = 0;
  let count = new Map();
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    let wind = right - left + 1;
    count.set(s[right], (count.get(s[right]) || 0) + 1);
    if ((wind - Math.max(...count.values())) > k) {
      count.set(s[left], count.get(s[left]) - 1);
      left++;
    }
    wind = right - left + 1;
    results = Math.max(results, wind);
  }
  return results;
}

function longestSubstringLength(s) {
  let set = new Set();
  let left = 0;
  let maxSize = 0;
  if (s.length === 0 || s.length === 1) return s.length;
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

function longestConsecutive(nums) {
  const set = new Set(nums);
  let max = 0;
  for (let num of set) {
    if (set.has(num - 1)) continue;
    let currNum = num, currMax = 1;
    while (set.has(currNum + 1)) {
      currNum++, currMax++;
    }
    max + Math.max(max, currMax);
  }
  return max;
}

function charReplacement(s, k) {
  let results = 0;
  let count = new Map();
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    let wind = right - left + 1;
    count.set(s[right], (count.get(s[right]) || 0) + 1);
    
    if ((wind - Math.max(...count.values())) > k) {
      count.set(s[left], count.get(s[left]) - 1);
      left++;
    }
    wind = right - left + 1;
    results = Math.max(results, wind);
  }
  return results;
}

function productExceptSelf(nums) {
  const results = [];
  let left = 1;
  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--){
    results[i] = right;
    right *= nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
    results[j] *= left;
    left *= nums[j];
  }
  return answer;
}

function topKFrequent(nums, k) {
  const map = new Map();
  const bucket = [];
  const res = [];
  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }
  for (let [num, f] of map) {
    bucket[f] = (bucket[f] || new Set()).add(num);
  }
  for (let i = bucket.length - 1; i >= 0; i--){
    if (bucket[i]) res.push(...bucket[i]);
    if (res.length === k) break;
  }
  return result;
}

function groupAnagrams(strs) {
  let obj = {};
  for (let str of strs) {
    let letters = str.split("").sort().join("");
    obj[letters] ? obj[letters].push(str) : obj[letters] = [str];
  }
  return Object.values(obj);
}
