function longestSubWithoutRepeating(s) {
  let set = new Set();
  let left = 0;
  let max = 0;
  for (let i = 0; i  < s.length; i ++) {
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
  let freq = new Map();
  const bucket = [];
  const res = [];
  for (let num of nums) {
    freq.set(num, (freq[num] || 0) + 1);
  }
  for (let [num, f] of freq) {
    bucket[f] = (bucket[f] || new Set()).add(num);
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (bucket[i]) res.push(...bucket[i]);
    if (res.length === k) break;
  }
  return res;
}

function windowMax(nums, k) {
  const q = [];
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    while (q.length && nums[q[q.length - 1]] <= nums[i]) {
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

function groupAnagrams(strs) {
  let obj = {};
  for (let str of strs) {
    let letters = str.split("").sort().join("");
    obj[letters] ? obj[letters].push(str) : obj[letters] = [str];
  }
  return Object.values(obj);
}

function longestRepeatingRep(s, k) {
  let result = 0;
  let count = new Map();
  let l = 0;

  for (let r = 0; r < s.length; r++) {
    let wind = r - l + 1;
    count.set(s[r], (count.get(s[r] || 0) + 1));
    if ((wind - Math.max(...count.values())) > k) {
      count.set(s[l], count.get(s[l]) - 1);
      left++;
    }
    wind = r - l + 1;
    result = Math.max(result, wind);
  }
  return result;
}

function longestSubWithoutRepeating(s) {
  const set = new Set();
  let l = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[i]);
      l++;
    }
    set.add(s[i]);
    max = Math.max(max, i - l + 1);
  } 
  return max;
}


function windowMax(nums, k) {
  const q = [];
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    while (q.length && nums[q[q.length - 1]] <= nums[i]) {
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

function premutationInStr(s1, s2) {

}
