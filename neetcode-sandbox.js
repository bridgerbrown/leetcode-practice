function longestWoRepeating(s) {
  let left = 0;
  let set = new Set();
  let max = 0;
  for (let r = 0; r < s.length; r++) {
    if (set.has(s[i])) {
      left++;
      set.delete(s[l]);
    }
    set.add(s[l]);
    max = Math.max(max, left - r + 1);
  }
  return max;
}

function slidingWinMax(nums, k) {
  const q = [];
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    while (q.length && nums[q[q.length - 1]] <= nums[i]) {
      q.pop();
    }
    q.push(i);
    if (q[0] === i - k) q.shift();
    if (i >= k - 1) res.push(nums[q[0]]);
  }
  return res;
}

function permInStr(s1, s2) {
  let l = 0;
  let r = 0;
  let requiredLength = s1.length;
  let freq = new Map();
  for (let char of s1) {
    freq[char] = (freq[char] || 0) + 1;
  }
  while (r <= s2.length){
    if (freq[s2[r]] > 0) requiredLength--;
    freq[s2[r]]--;
    r++;

    if (requiredLength === 0) return true;

    if (r - l === s1.length) {
      if (freq[s2[l]] >= 0) requiredLength++;
      freq[s2[l]]++;
      l++;
    }
  }
}

function longestRepCharRep(s, k) {
  let count = 0;
  let freq = new Map();
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    let win = r - l + 1;
    freq.set(s[r], (freq.get[s[r]] || 0) + 1);
    if ((win - Math.max(...freq.values())) > k) {
      freq.set(s[l], freq.get(s[l]) - 1);
      l++;
    }
    win = r - l + 1;
    count = Math.max(count, win);
  }
  return count;
}

function minWind(s, t) {
  let min = "", l = 0, r = -1;
  let freq = {};
  t.split('').forEach(e => {
    freq[e] = (freq[e] || 0) + 1;
  });
  let unique = Object.keys(freq).length;

  while (r <= s.length) {
    if (unique == 0) {
      let curr = s[l];
      if (freq[curr] != null) freq[curr]++;
      if (freq[curr] > 0) unique++;

      let temp = s.substring(l, r + 1);
      if (min == "") min = temp;
      else min = min.length < temp.length ? min : temp;
      l++;
    } else {
      r++;
      let curr = s[r];
      if (freq[curr] != null) freq[curr]--;
      if (freq[curr] == 0) unique--;
    }
  }
  return min;
}
