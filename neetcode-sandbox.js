function groupAnagrams(strs) {
  let obj = {};
  for (let str of strs) {
    let letters = str.split("").sort().join("");
    obj[letters] ? obj[letters].push(str) : obj[letters] = [str];
  }
  return Object.values(obj);
}

function permInStr(s1, s2) {
  if (s1.length > s2.length) return false;
  let needed = {};
  for (let char of s1) {
    needed[char] = (needed[char] || 0) + 1;
  }

  let l = 0, r = 0, requiredLength = s1.length;
  while (r < s2.length) {
    if (needed[s2[r]] > 0) requiredLength--;
    needed[s2[r]]--;
    r++;

    if (requiredLength === 0) return true;

    if (r - l === s1.length) {
      if (needed[s2[l]] >= 0) requiredLength++;
      needed[s2[l]]++;
      l++;
    }
  }
  return false;
}

function permInStr(s1, s2) {
  if (s1.length > s2.length) return false;
  let needed = {};
  for (let char of s1) {
    needed[char] = (needed[char] || 0) + 1;
  }
  
  let l = 0, r = 0, requiredLength = s1.length;
  while (r < s2.length) {
    if (needed[s2[r]] > 0) requiredLength--;
    needed[s2[r]]--;
    r++;

    if (requiredLength === 0) return true;

    if (r - l === s1.length) {
      if (needed[s2[l]] >= 0) requiredLength++;
      needed[s2[l]]++;
      l++;
    }
  }
  return false
}

function longestRepeatingReplacement(s, k) {
  let count = 0;
  let freq = new Map();
  let l = 0;

  for (let r = 0; r < s.length; r++) {
    let win = r - l + 1;
    freq.set(s[r], (freq.get(s[r]) || 0) + 1);

    if ((win - Math.max(...freq.values())) > k) {
      freq.set(s[l], freq.get(s[l]) - 1);
      l++;
    }

    win = r - l + 1;
    count = Math.max(count, win);
  }
  return count;
}

function longestRepeatingReplacement(s, k) {
  let count = 0;
  let freq = new Map();
  let l = 0;

  for (let r = 0; r < s.length; r++) {
    let win = r - l + 1;
    freq.set(s[r], (freq.get(s[r]) || 0) + 1);

    if((win - Math.max(...freq.values())) > k) {
      freq.set(s[l], freq.get(s[l]) - 1);
      l++;
    }

    win = r - l + 1;
    count = Math.max(count, win);
  }
  return count;
}

function slidingWMax(nums, k) {
  const indices = [];
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    while (indices.length && nums[indices[indices.length - 1]] <= nums[i]) {
      indices.pop();  
    }
    indices.push(i);
    if (indices[0] === i - k) {
      indices.shift();
    }
    if (i >= k - 1) {
      res.push(nums[indices[0]]);
    }
  }
  return res;
}

function slidingWMax(nums, k) {
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

function minWind(s, t) {
  let min = "", l = 0, r = -1;
  let freq = {};
  t.split('').forEach(e => {
    freq[e] ? freq[e] = freq[e] + 1 : freq[e] = 1;
  });
  let uniqueCount = Object.keys(freq).length;
  while (r <= s.length) {
    if (uniqueCount == 0) {
      let curr = s[l];
      if (freq[curr] != null) freq[curr]++;
      if (freq[curr] > 0) uniqueCount++;

      let temp = s.substring(l, r + 1);

      if (min == "") min = temp;
      else min = min.length < temp.length ? min : temp;
    } else {
      r++;
      let curr = s[r];
      if (freq[curr] != null) freq[curr]--;
      if (freq[curr] == 0) uniqueCount--;
    }
  }
  return min;
}

function minWind(s, t) {
  let min = "", l = 0, r = -1;
  let freq = {};
  t.split('').forEach(e => {
    freq[e] = (freq[e] || 0) + 1;
  })

  let uniqueCount = Object.keys(freq).length;
  while (r <= s.length) {
    if (uniqueCount == 0) {
      let curr = s[l];
      if (freq[curr] != null) freq[curr]++;
      if (freq[curr] > 0) uniqueCount++;

      let temp = s.substring(l, r + 1);

      if (min == "") min = temp;
      else min = min.length < temp.length ? min : temp;
      l++;
    } else {
      r++;
      let curr = s[r];
      if (freq[curr] != null) freq[curr]--;
      if (freq[curr] == 0) uniqueCount--;
    }
  }
  return min;
}
