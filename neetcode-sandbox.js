function longestRepChRepl(s, k) {
  const freq = new Map();
  let l = 0, r = 0;
  while (r < s.length) {
    let wind = r - l + 1;
    freq.set(s[r], (freq.get(s[r]) || 0) + 1);
    if (wind - Math.max(...freq.values()) > k) {
      freq.set(s[l], freq.get(s[l]) - 1);
      l++;
    }
    wind = r - l + 1;
    count = Math.max(count, wind);
  }
  return count;
}

function slideWinMax(nums, k) {
  const idx = [];
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    while (nums[idx[idx.length - 1]] < nums[i]) {
      idx.pop();
    }
    idx.push(i);
    if (idx[0] === i - k) idx.shift();
    if (i >= k - 1) res.push(nums[idx[0]]);
  }
  return res;
}

function minWinSub(s, t) {
  const freq = {};
  const min = "";
  for (let ch of t) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  let unique = Object.keys(freq).length;
  let l = 0, r = -1;
  while (r < s.length) {
    if (unique === 0) {
      if (freq[s[l]] !== undefined) freq[s[l]]++;
      if (freq[s[l]] > 0) unique++

      let temp = s.substring(l, r + 1);
      min.length < temp.length ? min = min : min = temp;
      l++;
    } else {
      r++;
      if (freq[s[r]] !== undefined) freq[s[r]]--;
      if (freq[s[r]] > 0) unique--;
    }
  }
  return min;
}

function mostFreqElems(nums, k) {
  const freq = new Map();
  const bucket = [];
  const res = [];

  for (let num of nums) {
    freq.set(freq.get(num) || 0) + 1;
  }
  for (let [num, f] of freq) {
    bucket[f] = (bucket[f] || new Set()).add(num);
  }
  for (let i = bucket.length - 1; i > 0; i--) {
    if (bucket[i]) res.push(...bucket[i]);
    if (res.length === k) break;
  }
  return res;
}

function permInStr(s1, s2) {
  const freq = {};
  for (let ch of s1) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  let needed = s1.length;
  let l = 0, r = 0;
  while (r < s2.length) {
    if (freq[s2[r]] > 0) {
      needed--;
      freq[s2[r]]--;
      r++;
      if (needed === 0) return true;
    } 
    if (r - l === s1.length) {
      if (freq[s2[l]] >= 0) needed++;
      freq[s2[l]]++;
      l++;
    }
  }
  return false;
}

function twoSumII(nums, target) {
  let [l, r] = [0, nums.length - 1];
  while (l < r) {
    const sum = nums[l] + nums[r];
    const isTarget = sum === target;
    if (isTarget) return [l + 1, r + 1]
    if (sum < target) l++;
    if (target < sum) r--;
  }
  return [-1, -1]
}

function threeSum(nums) {
  const res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    if (a > 0) break;
    if (i > 0 && a === nums[i - 1]) continue;
    
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const threeSum = a + nums[l] + nums[r];
      if (threeSum > 0) {
        r--;
      } else if (threeSum < 0) {
        l++;
      } else {
        res.push([a, nums[l], nums[r]]);
        l++, r--;
        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }
  return res;
}

function maxArea(height) {
  const res = 0;
  let l = 0, r = height.length - 1;
  while (l < r) {
    const area = (r - l) * Math.min(height[l], height[r]);
    res = Math.max(res, area);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return res;
}

