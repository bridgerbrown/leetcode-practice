function slideWinMax(nums, k) {
  const idx = [];
  const r = [];
  for (let i = 0; i < nums.length; i++) {
    while (idx.length && nums[idx[idx.length - 1]] <= nums[i]) {
      idx.pop();
    }
    idx.push(i);
    if (idx[0] === i - k) {
      idx.shift();
    }

    if (i >= k - 1) {
      r.push(idx[idx.length - 1]);
    }
  }
  return r;
}

function productExceptSelf(nums) {
  const res = [];
  const l = 1;
  const r = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    res = r;
    r *= nums[i];
  }
  for (let i = 0; i < nums.length - 1; i++) {
    res *= l;
    l *= nums[i];
  }
  return res;
}

function minWinSub(s, t) {
  const freq = {};
  const min = "";
  for (let char of t) {
    freq[char] = (freq[char] || 0) + 1;
  }
  const unique = Object.keys(freq).length;
  let l = 0, r = -1;
  for (let char of s) {
    if (unique === 0) {
      let curr = s[l];
      if (freq[curr] !== undefined) freq[curr]++;
      if (freq[curr] > 0) unique++;

      let temp = s.substring(l, r + 1);
      min.length < temp.length ? min = min : min = temp;
      l++;
    } else {
      r++;
      let curr = s[r];
      if (freq[curr] !== undefined) freq[curr]--;
      if (freq[curr] === 0) unique--;
    }
  }
  return min;
}

function longestConsecutiveSeq(nums) {
  const set = new Set(nums);
  const max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i] - 1)) continue;
    set.add(nums[i])
    let currNum = nums[i], currMax = 0;
    while (set.has(currNum + 1)) {
      currMax++, currNum++;
    }
    Math.max(currMax, max);
  }
  return max;
}

function longestRepeatCharRep(s, k) {
  let count = 0;
  const freq = new Map();
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    let wind = r - l + 1;
    freq.set(s[r], (freq.get(s[r]) || 0) + 1);
    if (wind - Math.max(...freq.values()) > k) {
      freq.set(s[l], freq.get(s[l] - 1));
      l++;
    }
    wind = r - l + 1;
    count = Math.max(count, wind);
  }
  return count;
}
