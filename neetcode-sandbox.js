function genParen(n) {
  dfs(n);
}

const dfs = (n, combos = [], open = 0, close = 0, curr = []) => {
  const isBaseCase = curr.length === (n * 2);
  if (isBaseCase) {
    combos.push(curr.join(''));
    return combos;
  }

  const isOpen = open < n;
  if (isOpen) rOpen(n, combos, open, close, curr);
  const isClose = close < open;
  if (isClose) rClose(n, combos, open, close, curr);

  return combos;
}

const rOpen = (n, combos, open, close, curr) => {
  curr.push('(');
  dfs(n, combos, (open + 1), close, curr);
  curr.pop();
}
const rClose = (n, combos, open, close, curr) => {
  curr.push(')');
  dfs(n, combos, open, (close + 1), curr);
  curr.pop();
}

function threeSum(nums) {
  if (nums.length === 0 || !nums) return [];
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    if (a > 0) break;
    if (i > 0 && a === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const sum = a + nums[l] + nums[r];
      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        res.push([a, nums[l], nums[r]]);
        l++, r--;
        while (nums[l] === nums[l - 1] && l < r) l++;
      }
    }
  }
  return res;
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

const canShrink = (stack, temps, day) => {
  const prevDay = stack[stack.length - 1];
  const [prevTemp, currTemp] = [temps[prevDay], temps[day]];
  const isWarmer = prevTemp < currTemp;
  return stack.length && isWarmer;
}

function containerWithMostWater(height) {
  const res = 0;
  let l = 0, r = height.length - 1;
  while (l < r) {
    const area = (r - l) * Math.min(height[l], height[r]);
    res = Math.max(res, area);
    if (height[l], height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return res;
}

function permInStr(s1, s2) {
  if (s1.length > s2.length) return false;

  const freq = {};

  for (let char of s1) {
    freq[char] = (freq[char] || 0) + 1;
  }

  let l = 0, r = 0, neededLen = s1.length;
  
  while (r < s2.length) {
    let curr = s2[r];
    if (freq[s2[r]] > 0) neededLen--;
    freq[curr]--;
    r++;

    if (neededLen === 0) return true;

    if (r - l === s1.length) {
      curr = s2[l];
      if (freq[curr] >= 0) neededLen++;
      freq[curr]++;
      l++;
    }
  }
  return false;
}

function dailyTemps(temps, stack = []) {
  const days = Array.fill(temps.length).fill(0);

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

function minWindSub(s, t) {
  let min = "", l = 0, r = -1;
  let freq = {};
  for (let char of t) {
    freq[char] = (freq[char] || 0) + 1;
  }
  let unique = Object.keys(freq).length;
  while (r < s.length) {
    if (unique === 0) {
      let curr = s[l];
      if (freq[curr] !== undefined) freq[curr]++;
      if (freq[curr] === 0) unique++;

      let temp = s.substring(l, r + 1);
      min = (min === "" || min.length < temp.length) ? min : temp;
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

function longestRepRepl(s, k) {
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

function permInStr(s1, s2) {
  const freq = {};
  for (let char of s1) {
    freq[char] = (freq[char] || 0) + 1;
  }
  let l = 0, r = 0, neededLen = s1.length;
  while (r < s2.length) {
    let curr = s2[r];
    if (freq[curr] > 0) neededLen--;
    freq[curr]--;
    r++;

    if (neededLen === 0) return true;

    if (r - l === s1.length) {
      curr = s2[l];
      if (freq[curr] >= 0) neededLen++;
      freq[curr]++;
      l++;
    }
  }
  return false;
}

function longestSubWoRepCh(s) {
  const set = new Set();
  let l = 0;
  let max = 0;
  
  for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    set.add(s[r]);
    max = Math.max(max, r - l + 1);
  }
  return max;
}
