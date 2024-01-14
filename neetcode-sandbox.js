function kTopFrequent(nums, k) {
  const freq = new Map();
  const bucket = [];
  const top = [];
  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }
  for (let [num, f] of freq) {
    bucket[f] = (bucket[f] || new Set()).add(num);
  }
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) top.push(...bucket[i]);
    if (top.length === k) break;
  }
  return top;
};

function longestConsecutive(nums) {
  const set = new Set(nums);
  const max = 0;
  for(let num of set) {
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
  const results = {};
  for (let str of strs) {
    let letters = str.split("").sort().join("");
    results[letters] ? results[letters].push(str) : results[letters] = [str];
  }
  return Object.values(obj);
}

function longestRepeatingChar(s, k) {
  let res = 0;
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
    res = Math.max(res, wind)
  }
  return res;
}

function lengthOfLongestSubstring(s) {
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

function productExceptSelf(nums) {
  let leftM = 1;
  let rightM = 1;
  let product = [];
  for (let i = nums.length - 1; i >= 0; i--){
    answer[i] = rightM;
    rightM *= nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
    product[j] *= leftM;
    leftM *= nums[j];
  }
  return product;
}

function productExceptSelf(nums) {
  const p = [];
  let left = 1, right = 1;
  for (let i = nums.length - 1; i >= 0; i--){
    p[i] = right;
    right *= nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
    p[j] *= left;
    left *= nums[j];
  }
  return p;
}

function kTopFrequent(nums, k) {
  const freq = new Map();
  let bucket = [];
  let res = [];
  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }
  for (let [num, f] of freq) {
    bucket[f] = (bucket[f] || new Set()).add(num);
  }
  for (let i = 0; i < nums.length; i++) {
    if (bucket[i]) res.push(...bucket[i]);
    if (res.length === k) break;
  }
  return res;
}

function longestRepeatingChar(s) {
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

function groupAnagrams(strs) {
  let obj = {};
  for (let str of strs) {
    let letters = str.split("").sort().join("");
    obj[letters] ? obj[letters].push(str) : obj[letters] = [str];
  }
  return Object.values(obj);
}

function longestConsecutive(nums) {
  if (nums == null || nums.length === 0) return 0;
  let set = new Set(nums);
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

function longestRepeatingChar(s, k) {
  let results = 0;
  let count = new Map();
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    let wind = right - left + 1;
    count.set(s[right], (count.get(s[right] || 0) + 1));

    if ((wind - Math.max(...count.values())) > k) {
      count.set(s[left], count.get(s[left]) - 1);
      left++;
    }
    wind = right - left + 1;
    results = Math.max(results, wind);
  }
  return results;
}
