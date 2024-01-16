function longestCons(nums) {
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
  const ans = [];
  let lMult = 1;
  let rMult = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] = rMult;
    rMult *= nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
    ans[j] *= lMult;
    lMult *= nums[j];
  }
  return ans;
}

function longestRepeatingChar(s, k) {
  let left = 0;
  let result = 0;
  let count = new Map();
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

function longestWithoutRepeat(s) {
  const set = new Set();
  let left = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[i]);
    max = Math.max(max, i - left + 1);
  }
  return max;
}

function topKFrequent(nums, k) {
  const freq = new Map();
  const ans = [];
  const bucket = [];
  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }
  for (let [num, f] of freq) {
    bucket[f] = (bucket[f] || new Set()).add(num);
  }
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) ans.push(...bucket[i]);
    if (ans.length === k) break;
  }
  return ans;
}

function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;
  let left = 0, right = 0, requiredLength = s1.length;
  let needed = {};

  for (let i = 0; i < s1.length; i++) {
    needed[s1[i]] = (needed[s1[i]] || 0) + 1;
  }
  while (right < s2.length) {
    if (needed[s2[right]] > 0) requiredLength--;
    needed[s2[right]]--;
    right++;
    
    if (requiredLength === 0) return true;
    
    if (right - left === s1.length) {
      if (needed[s2[left]] >= 0) requiredLength++;
      needed[s2[left]]++;
      left++;
    }
  }
  return false;
}

function minWindow(s, t) {
  let min = "", left = 0, right = -1;
  let freq = {};
  
  t.split('').forEach(element => {
    freq[element] ? freq[element] = freq[element] + 1 : freq[element] = 1;
  })
  
  let count = Object.keys(map).length;

  while (right <= s.length) {
    if (count == 0) {
      let current = s[left];
      if (freq[current] != null) freq[current]++;
      if (freq[current] > 0) count++;
      let temp = s.substring(left, right + 1);
      if (min == "") min = temp;
      else min = min.length < temp.length ? min : temp;
      left++;
    } else {
      right++;
      let current = s[right];
      if (freq[current] != null) freq[current]--;
      if (freq[current] == 0) count--;
    }
  }
  return min;
}

function maxSlidingWindow(nums, k) {
  const q = [];
  const res = [];

  for (let i = 0; i  < nums.length; i ++) {
    while(q.length && nums[q[q.length - 1]] <= nums[i]) {
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
