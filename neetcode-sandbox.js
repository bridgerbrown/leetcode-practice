function permInStr(s1, s2) {
  const freq = {};
  for (let ch of s1) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  const needed = s1.length;
  let l = 0, r = 0;
  while (r < s2.length) {
    let curr = s2[r];
    if (freq[curr] > 0) needed--;
    freq[curr]--;
    r++;
    
    if (needed === 0) return true;

    if (r - l === s1.length) {
      curr = s2[l];
      if (freq[curr] >= 0) needed++;
      freq[curr]++;
      l++;
    }
  }
  return false;
}

function dailyTemps(temps, stack = []) {
  const days = Array(temps.length).fill(0);

  for (let day = 0; day < temps.length; day++) {
    while (canShrink(stack, temps, day)) {
      const prevColdDay = stack.pop();
      const daysToWait = (day - prevColdDay);
      days[prevColdDay] = daysToWait;
    }
    stack.push(day);
  }
  return days;
}
const canShrink = (stack, temps, day) => {
  const prevDay = stack[stack.length - 1];
  const [prevTemp, currTemp] = [temps[prevDay], temps[day]];
  const isWarmer = prevTemp < currTemp;
  return stack.length && isWarmer;
}

function longestSubWoRepCh(s) {
  const freq = new Set();
  const max = 0;
  let l = 0, r = 0;
  while (r < s.length) {
    if (set.has(s[r])) {
      s.delete(s[l]);
      l++;
    }
    set.add(s[r]);
    max = Math.max(max, r - l + 1);
    r++;
  }
  return max;
}

function slideWindMax(nums, k) {
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
      res.push(idx[0]);
      l++;
    }
    r++;
  }
  return res;
}

function containerMostWater(height) {
  let l = 0, r = height.length - 1;
  let max = 0;
  while (l < r) {
    const square = (r - l) * Math.max(height[l], height[r]);
    max = Math.max(square, max);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
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
      const sum = nums[i] + nums[l] + nums[r];
      if (sum < 0) {
        l++;
      } else if (sum > 0) {
        r--;
      } else {
        res.push([nums[i], nums[l], nums[r]]);
        l++, r--;
        while (nums[l] == nums[l - 1] && l < r) l++;
      }
    }
  }
  return res;
}

function genParen(n) {
  return dfs(n);
}
const dfs = (n, combos = [], open = 0, close = 0, path = []) => {
  const isBaseCase = (path.length === (n * 2));
  if (isBaseCase) {
    combos.push(path.join(''));
    return combos;
  }

  const isOpen = open < n;
  if (isOpen) backTrackOpen(n, combos, open, close, path);
  const isClose = close < n;
  if (isClose) backTrackClose(n, combos, open, close, path);

  return combos;
}
const backTrackOpen = (n, combos, open, close, path) => {
  path.push('(');
  dfs(n, combos, (open + 1), close, path);
  path.pop();
}
const backTrackClose = (n, combos, open, close, path) => {
  path.push(')');
  dfs(n, combos, open, close + 1, path);
  path.pop();
}

function evalRPN(tokens) {
  const res = [];
  const ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b),
  }
  for (let i = 0; i < tokens.length; i++) {
    if (ops[tokens[i]]) {
      let top = stack.pop();
      let sec = stack.pop();
      stack.push(ops[tokens[i]](sec, top));
    } else {
      res.push(Number(tokens[i]));
    }
  }
  return stack.pop();
}

function dailyTemps(temps, stack = []) {
  const days = Array(temps.length).fill(0);

  for (let i = 0; i < temps.length; i++) {
    while (canShrink(stack, temps, i)) {
      const prevColdDay = stack.pop();
      const daysToWait = (i - prevColdDay);
      days[prevColdDay] = daysToWait;
    }
    stack.push(i);
  }
  return days;
}
const canShrink = (stack, temps, i) => {
  const prevDay = stack[stack.length - 1];
  const [prevTemp, currTemp] = [temps[prevDay], temps[i]];
  const isWarmer = prevTemp < currTemp;
  return stack.length && isWarmer;
}

function minWindSub(s, t) {
  const freq = {};
  let min = "";
  for (let ch of t) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  let unique = Object.keys(freq).length;
  let l = 0, r = -1;
  while (r < s.length) {
    if (unique === 0) {
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
  return min;
}
