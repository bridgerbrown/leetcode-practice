function minWindSub(s, t) {
  const freq = {};
  const min = "";
  for (let char of t) {
    freq[char] = (freq[char] || 0) + 1;
  }
  let l = 0, r = -1;
  let uniqueChars = Object.keys(freq).length;
  while (r <= s.length) {
    if (uniqueChars == 0) {
      let curr = s[l];
      if (freq[curr] !== undefined) freq[curr]++;
      if (freq[curr > 0]) uniqueChars++;

      let temp = s.substrin(l, r + 1);
      min = (min === "" || min.length < temp.length) ? min : temp;
      l++;
    } else {
      r++;
      let curr = s[r];
      if (freq[curr] !== null) freq[curr]--;
      if (freq[curr] == 0) uniqueChars--;
    }
  }
  return min;
}

function permInStr(s1, s2) {
  let neededLen = s1.length;
  const freq = {};
  for (let ch of s1) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  let l = 0, r = 0;
  while (r <= s2.length) {
    let curr = s2[r];
    if (freq[curr] > 0) neededLen--;
    freq[curr]--;
    r++;

    if (neededLen === 0) return true;

    if (r - l === s1.length) {
      curr = s2[l];
      if (freq[curr] >= 0) neededLen++;
      freq[curr]++;
      l++
    }
  }
  return false;
}

function slideWinMax(nums, k) {
  const idx = [];
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    while (idx.length && nums[idx[idx.length - 1]] <= nums[i]) {
      idx.pop();
    }
    idx.push();
    if (idx[0] === i - k) idx.shift();
    if (i >= k - 1) res.push(nums[idx[0]]);
  }
  return res;
}

function productOfArrExcSelf(nums) {
  let lMult = 1, rMult = 1;
  const res = [];
  for (let i = nums.length - 1; i > 0; i--) {
    res[i] = rMult; 
    rMult *= nums[i];
  }
  for (let j = 0; j <= nums.length - 1; j++) {
    res[j] *= lMult;
    lMult *= nums[j];
  }
  return res;
}

function longestCharRep(s, k) {
  const freq = new Map();
  let count = 0;
  let l = 0, r = 0;
  while (r <= s.length) {
    let win = r - l + 1;
    let curr = s[r];
    freq.set(curr, (freq.get(curr) || 0) + 1);
    if ((win - Math.max(...freq.values())) > k) {
      curr = s[l];
      freq.set(curr, freq.get(curr) - 1);
      l++;
    }

    win = r - l + 1;
    count = Math.max(count, win);
  }
  return count;
}
