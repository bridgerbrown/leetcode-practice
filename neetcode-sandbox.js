function topKFrequent(nums, k) {
  const freq = new Map();
  const bucket = [];
  const r = [];

  for (let num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1)
  }
  for (let [num, f] of freq) {
    bucket[f] = (bucket[f] || new Set()).add(num);
  }
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) r.push(...bucket[i]); 
    if (r.length === k) break
  }
  return r;
}

function longestWithoutRepeating(s) {
  let set = new Set();
  let left = 0;
  let maxSize = 0;
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
    while (set.has(currNum + 1)){
      currNum++, currMax++;
    }
    max = Math.max(max, currMax);
  }
  return max;
}

function longestRepeatingChar(s, k) {
  let result = 0;
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
    result = Math.max(result, wind);
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

function productExceptSelf(nums) {
  let rightM = 1;
  let leftM = 1;
  let r = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    r[i] = rightM;
    rightM *= nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
    r[i] *= leftM;
    leftM *= nums[j];
  }
  return r;
}
