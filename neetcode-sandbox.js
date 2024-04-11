function minRotatedArr(nums) {
  let l = 0, r = nums.length - 1;
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[l] < nums[r]) {
      return nums[l];
    } else if (nums[l] <= nums[mid]) {
      l = mid + 1;
    } else if (nums[r] > nums[mid]) {
      r = mid;
    }
  }
  return nums[l];
}

function slideWindMax(nums, k) {
  const idx = [];
  const res = [];
  let l = 0, r = 0;
  while (r < nums.length - 1) {
    if (nums[idx[idx.length - 1]] < nums[r] && idx.length) {
      idx.pop();
    }
    idx.push(r);
    if (l > idx[0]) {
      idx.shift();
    }
    if (r - l + 1 === k) {
      res.push(nums[idx[0]]);
      l++;
    }
    r++;
  }
  return res;
}

function search2DMatrix(matrix, target) {
  let [rows, cols] = [matrix.length, matrix[0].length];
  let [top, bot] = [0, rows - 1];

  while (top <= bot) {
    let row = Math.floor((top + bot) / 2);
    if (target > matrix[row][cols - 1]) {
      top = row + 1;
    } else if (target < matrix[row][0]) {
      bot = row - 1;
    } else {
      break;
    }
  }

  if (!(top <= bot)) return false;

  let row = Math.floor((top + bot) / 2);
  let [l, r] = [0, cols - 1];
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (target > matrix[row][m]) {
      l = m + 1;
    } else if (target < matrix[row][m]) {
      r = m - 1;
    } else if (target == matrix[row][m]) {
      return true;
    }
  }
  return false;
}

function trapRainWater(h) {
  let l = 0, r = h.length - 1;
  let lm = h[l], rm = h[r];
  let max = 0;
  while (l < r) {
    if (lm < rm) {
      l++;
      lm = Math.max(lm, l);
      max += lm - h[l];
    } else if (lm > rm) {
      r--;
      rm = Math.max(rm, r);
      max += rm - h[r];
    }
  }
  return max;
}

function threeSum(nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    if (a > 0) break;
    if (i > 0 && a === nums[i - 1]) continue;
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      const sum = nums[l] + nums[r] + a;
      if (sum < 0) {
        l++
      } else if (sum > 0) {
        r--;
      } else {
        res.push([a, nums[r], nums[l]]);
        l++, r--;
        while (nums[l + 1] === nums[l] && l < r) {
          l++;
        }
      }
    }
  }
  return res;
}

function topKFrequent(nums, k) {
  const freq = new Map();
  const bucket = [];
  const res = [];
  for (let num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  for (let [num, f] of freq) {
    bucket[f] = (bucket[f] || new Set()).add(num);
  }
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) res.push(...bucket[i]);
    if (res.length === k) break;
  }
  return res;
}

function minWindSub(s, t) {
  const f = {};
  let min = "";
  for (let ch of t) {
    f[ch] = (f[ch] || 0) + 1;
  }
  let l = 0, r = 0, unique = Object.keys(f).length;
  while (r < s.length) {
    if (unique === 0) {
      let cur = s[l];
      if (f[cur] !== undefined) freq[cur]++;
      if (f[cur] > 0) unique++;

      let sub = substring(s[l], s[r]);
      min = (min === "" || min.length < t.length) ? min : sub;
      l++;
    } else {
      let cur = s[r];
      if (f[cur] !== undefined) f[ch]--;
      if (f[cur] === 0) unique--;
      r++;
    }
  }
  return min;
}

function dailyTemps(temps, stack=[]) {
  const days = new Array(temps.length).fill(0);

  for (let day = 0; day < temps.length; day++) {
    while (canShrink(temps, stack, day)) {
      const prevColdDay = stack.pop();
      const diff = day - prevColdDay;
      days[prevColdDay] = diff;
    }
    stack.push(day);
  }
  return days;
}

const canShrink = (temps, stack, day) => {
  const prevDay = stack[stack.length - 1];
  const [prevT, curT] = [temps[prevDay], temps[day]];
  const isWarmer = prevT < curT;
  return isWarmer && stack.length;
}

function search2DMatrix(matrix, target) {
  let [rows, cols] = [matrix.length, matrix[0].length];
  let [top, bot] = [0, rows - 1];

  while (top <= bot) {
    let mid = Math.floor((top + bot) / 2);
    if (target > matrix[mid][cols - 1]) {
      top = mid + 1;
    } else if (target < matrix[mid][0]) {
      bot = mid - 1;
    } else {
      break;
    }
  }

  if (!(top <= bot)) return false;

  let mid = Math.floor((top + bot) / 2);
  let [l, r] = [0, cols - 1];
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (target > matrix[mid][m]) {
      l = m + 1;
    } else if (target < matrix[mid][m]) {
      r = m - 1;
    } else if (target == matrix[mid][m]) {
      return true;
    }
  }
  return false;
}

function kokoEatingBananas(piles, h) {
  let [l, r] = [1, Math.max(...piles)];
  while (l < r) {
    const mid = (l + r) / 2;
    const hSpent = 0;
    for (const pile of piles) {
      hSpent += Math.ceil(pile / mid);
    }
    if (h < hSpent) l = mid + 1;
    if (h >= hSpent) r = mid;
  }
  return r;
}

function longestRepChRepl(s, k) {
  let freq = new Map();
  let max = 0;
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    let win = r - l + 1;

    freq.set(s[r], (freq.get(s[r]) || 0) + 1);

    if ((win - Math.max(...freq.values())) > k) {
      freq.set(s[l], (freq.get(s[l]) - 1));
      l++;
    }
    win = r - l + 1;
    max = Math.max(max, win);
  }
  return max;
}

function trapRainWater(h) {
  let l = 0, r = h.length - 1;
  let lm = h[l], rm = h[r];
  let max = 0;
  while (l <= r) {
    if (lm < rm) {
      l++;
      lm = Math.max(lm, h[l]);
      max += lm - h[l];
    } else {
      r--;
      rm = Math.max(rm, h[r]);
      max += rm - h[r];
    }
  }
  return max;
}

function search2DMatrix(matrix, target) {
  let [rows, cols] = [matrix.length, matrix[0].length];
  let [top, bot] = [0, rows - 1];

  while (top <= bot) {
    let row = ((top + bot) / 2);
    if (target < matrix[row][cols - 1]) {
      bot = row - 1;
    } else if (target > matrix[row][0]){
      top = row + 1;
    } else {
      break;
    }
  }

  let row = Math.floor((top + bot) / 2);
  let [l, r] = [0, cols - 1];
  while (l < r) {
    let m = Math.floor((l + r) / 2);
    if (target > matrix[row][m]) {
      l = m + 1;
    } else if (target < matrix[row][m]) {
      r = m - 1;
    } else {
      return true;
    }
  }
  return false;
}

function koko(piles, h) {
  let [l, r] = [1, Math.max(...piles)] ;
  while (l < r) {
    const mid = (l + r) / 2;
    const hspent = 0;
    for (const pile of piles) {
      hspent += Math.ceil(pile / mid);
    }
    if (h < hspent) l = mid + 1;
    if (h >= hspent) r = mid;
  }
  return r;
}

function longestConsSeq(nums) {
  const set = new Set(nums);
  let max = 0;
  for (let num of set) {
    if (set.has(num - 1)) continue;
    let currnum = num, currmax = 1;
    while (set.has(currnum + 1)) {
      currnum++, currmax++;
    }
    max = Math.max(currmax, max);
  }
  return max;
}
