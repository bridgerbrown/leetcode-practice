function minWindSub(s, t) {
  const freq = {}; 
  for (let ch of t) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  let l = 0, r = -1;
  let unique = Object.keys(freq).length;
  let min = "";
  while (r < s.length) {
    if (unique.length === 0) {
      let curr = s[l];
      if (freq[curr] !== undefined) freq[curr]++;
      if (freq[curr] > 0) unique++;
      l++;

      let temp = s.substring(l, r + 1);
      min.length < temp.length ? min = min : min = temp;
    } else {
      r++;
      let curr = s[r];
      if (freq[curr] !== undefined) freq[curr]--;
      if (freq[curr] > 0) unique--;
    }
  }
}

function contMostWat(height) {
  let l = 0, r = height.length - 1;
  let res = 0;
  while (l < r) {
    const square = (r - l) * Math.max(height[l], height[r]);
    res = Math.max(square, res);
    if (height[l] < height[r]) {
      l++;
    } else {
      r++;
    }
  }
  return res;
}

function longestSubWoRepCh(s) {
  const freq = new Set();
  let l = 0, r = 0, res = 0;
  while (r < s.length) {
    if (freq.has(s[r])) {
      freq.delete(s[l]);
      l++;
    }
    freq.add(s[r]);
    res = Math.max(res, r - l + 1);
    r++;
  }
  return res;
}

function twoSumII(nums, target) {
  let l = 0, r = nums.length;
  while (l < r) {
    const sum = nums[l] + nums[r];
    if (sum < target) {
      l++;
    } else if (sum > target){
      r++;
    } else {
      return [l + 1, r + 1];
    }
  }
  return [-1, -1];
}

function slidingWindMax(nums, k) {
  const idx = [];
  const res = [];
  let l = 0, r = 0;
  while (r < nums.length) {
    while (idx.length && nums[idx[idx.length - 1]] < nums[r]) {
      idx.pop();
    }
    idx.push(r);
    if (l > idx[0]) idx.shift();
    if (r - l + 1 === k) {
      res.push(nums[idx[0]]);
      l++;
    }
    r++;
  }
  return res;
}
