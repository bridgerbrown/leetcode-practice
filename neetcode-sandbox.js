function permInStr(s1, s2) {
  let reqLen = s1.length;
  let needed = {};
  for (let char of s1) {
    needed[char] = (needed[char] || 0) + 1;
  }
  let l = 0, r = 0;
  while (r <= s2.length) {
    if (needed[s2[r]] > 0) reqLen--;
    needed[s2[r]]--;
    r++;

    if (reqLen === 0) return true;

    if (r - l === s1.length) {
      if (needed[s2[l]] >= 0) reqLen++;
      needed[s2[l]]++;
      l++;
    }
  }
  return false;
}

function minWinSub(s, t) {
  let need = {};
  for (let ch of t) {
    need[ch] = (need[ch] || 0) + 1;
  }
  let l = 0, r = 0, min = 0, unique = Object.keys(need).length;
  while (r <= s.length) {
    if (unique === 0) {
      let curr = s[l];
      if (need[curr] != null) need[curr]++;
      if (need[curr] > 0) unique++;

      let temp = s.substring(l, r + 1);
      if (min == "") min = temp;
      else min = Math.min(min.length, temp);
      l++;
    } else {
      r++;
      let curr = s[r];
      if (need[curr] != null) need[curr]--;
      if (need[curr] == 0) unique--;
    }
  }
  return min;
}

function slideWinMax(nums, k) {
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

function longestRepChRep(s, k) {
  let count = 0;
  let freq = new Map();
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    let win = r - l + 1;
    freq.set(s[r], (freq.get[s[r]]) || 0) + 1;
    if ((win - Math.max(...freq.values())) > k) {
      freq.set(s[l], freq.get(s[l]) - 1);
      l++;
    }
    win = r - l + 1;
    count = Math.max(count, win);
  }
  return count;
} 

