function lRChRp(s, k) {
  let l = 0, r = 0, max = 0;
  let freq = new Map();
  while (r < s.length) {
    let win = r - l + 1;
    freq.set(s[r], (freq.get(s[r]) || 0) + 1);

    if (win - Math.max(Object.values(freq) > k)) {
      freq.set(s[l], freq.get(s[l])--);
      l++;
    }

    win = r - l + 1;
    max = Math.max(max, win);
  }
  return max;
}

function dailyTemps(temps, stack=[]) {
  const days = new Array(temps.length).fill(0);

  for (let day = 0; day < temps.length; day++) {
    while(canShrink(temps, stack, day)) {
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
  const [prevTemp, currTemp] = [temps[prevDay], temps[day]];
  const isWarmer = prevTemp < currTemp;
  return isWarmer && stack.length;
}

function twoSumII(nums, target) {
  let l = 0, r = nums.length - 1;
  while (l < r) {
    let sum = nums[l] + nums[r];
    if (sum < target) {
      l++;
    } else if (sum > target) {
      r--;
    } else {
      return [l + 1, r + 1];
    }
  }
  return [-1, -1];
}

function lSubWoRepCh(s) {
  const set = new Set();
  let max = 0;
  let l = 0, r = 0;
  while (r < s.length) {
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    set.add(s[r]);
    let win = r - l + 1;
    max = Math.max(win, max);
    r++;
  }
  return max;
}

function minWinSub(s, t) {
  let min = "";
  let l = 0, r = 0;
  let freq = {};
  for (let ch of t) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  let unique = Object.keys(freq).length;
  while (r < s.length) {
    if (unique === 0) {
      let curr = s[l];
      if (freq[curr] !== undefined) freq[curr]++;
      if (freq[curr] > 0) unique++;

      let sub = s.substring(l, r + 1);
      min = (min === "" || min.length < sub.length) ? min : sub;
      l++;
    } else {
      let curr = s[r];
      if (freq[curr] !== undefined) freq[curr]--;
      if (freq[curr] === 0) unique--;
      r++;
    }
  }
  return min;
}

function permInStr(s1, s2) {
  let freq = {};
  for (let ch of s1) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  let l = 0, r = 0, needed = s1.length;
  while (r < s2.length) {
    let curr = s2[r];
    if (freq[curr] > 0) needed--;
    freq[curr]--;
    r++;

    if (needed === 0) return true;

    if (r - l === s1.length) {
      let curr = s2[l];
      if (freq[curr] >= 0) needed++;
      freq[curr]++;
      l++;
    }
  }
  return false;
}

function slideWinMax(nums, k) {
  const idx = [];
  const res = [];
  let l = 0, r = 0;
  while (r < nums.length) {
    while (nums[idx[idx.length - 1]] < nums[r]) {
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

function longestConsSeq(nums) {
  const set = new Set(nums);
  let max = 0;
  for (let num of nums) {
    if (set.has(num - 1)) continue;
    let currNum = num, currMax = 1;
    while (set.has(num + 1)) {
      currNum++, currMax++;
    }
    max = Math.max(max, currMax);
  }
  return max;
}

function genParen(n, combos = [], stack = [], open = 0, close = 0) {
  const base = stack.length === (n * 2);
  if (base) {
    combos.push(stack.join(''));
    return combos;
  }

  const isOpen = open < n;
  if (isOpen) bto(n, combos, stack, open, close);
  const isClose = close < open;
  if (isClose) btc(n, combos, stack, open, close);

  return combos;
}

const bto = (n, combos, stack, open, close) => {
  stack.push('(');
  genParen(n, combos, stack, (open + 1), close);
  stack.pop();
}

const btc = (n, combos, stack, open, close) => {
  stack.push(')');
  genParen(n, combos, stack, open, (close + 1));
  stack.pop();
}

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    if (a > 0) break;
    if (i > 0 && a === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const three = nums[l] + nums[r] + a;
      if (three > 0) {
        r--;
      } else if (three < 0) {
        l++
      } else {
        res.push([a, nums[l], nums[r]]);
        l++, r--;
        while (nums[l] === nums[l - 1] && l < r) l++;
      }
    }
  }
  return results;
}

function lSubWoRepCh(s) {
  const set = new Set();
  let max = 0;
  let l = 0, r = 0;
  while (r < s.length) {
    if (set.has(s[r])) {
      set.delete(s[r]);
      l++;
    }
    set.add(s[r]);
    let win = r - l + 1;
    max = Math.max(win, max);
  }
  return max;
}

function permInStr(s1, s2) {
  let freq = {};
  for (let ch of s1) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  let l = 0, r = 0, needed = s1.length;
  while (r < s2.length) {
    let curr = s2[r];
    if (freq[curr] > 0) needed--;
    freq[curr]--;
    r++;

    if (needed === 0) return true;

    if (r - l + 1 === s1.length) {
      let curr = s2[l];
      if (freq[curr] >= 0) needed++;
      freq[curr]++;
      l++;
    }
  }
  return false;
}

function search2DMatrix(matrix, target) {
  let [r, c] = [matrix.length, matrix[0].length];
  let [top, bot] = [0, r - 1];

  while (top <= bot){
    let row = Math.floor((top + bot) / 2);
    if (target > matrix[row][c - 1]) {
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

function threeSum(nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      const sum = a + nums[l] + nums[r];
      if (sum < 0) {
        l++;
      } else if (sum > 0) {
        r--;
      } else {
        res.push([a, nums[l], nums[r]]);
        l++, r--;
        while (nums[l + 1] === nums[l]) l++;
      }
    }
  }
  return res;
}

function trapRainWater(h) {
  let l = 0, r = h.length - 1;
  let lMax = h[l], rMax = h[r];
  let count = 0;
  while (l < r) {
    if (lMax < rMax) {
      l++;
      lMax = Math.max(lMax, h[l]);
      count += lMax - h[l];
    } else {
      r--;
      rMax = Math.max(rMax, h[r]);
      count += rMax - h[r];
    }
  }
  return count;
}
