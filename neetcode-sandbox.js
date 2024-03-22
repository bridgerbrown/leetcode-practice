function dailyTemps(temps, stack = []) {
  const days = Array(temps.length).fill(0);

  for (let day = 0; day < temps.length; day++) {
    while (canShrink(stack, temps, day)) {
      const prevColdDay = stack.pop();
      const diff = (day - prevColdDay);
      days[prevColdDay] = diff;
    }
    stack.push(day);
  }
  return days;
}

const canShrink = (stack, temps, day) => {
  const prevDay = stack[stack.length - 1];
  const [prevTemp, currTemp] = [temps[prevDay], temps[day]];
  const isWarmer = prevTemp < currTemp;
  return isWarmer && stack.length;
}

function longestSubWoRepCh(s) { 
  let set = new Set();
  let l = 0;
  let max = 0;

  if (s.length === 0 || s.length === 1) return s.length;

  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[l]);
      l++;
    }
    set.add(s[i])
    max = Math.max(max, i - l + 1);
  }
  return max;
}

var genParen = (n) => dfs(n);

const dfs = (n, combos = [], open = 0, close = 0, path = []) => {
  const isBase = (path.length === (n * 2));
  if (isBase) {
    combos.push(path.join(''));
    return combos;
  }

  const isOpen = open < n;
  if (isOpen) backTrackOpen(n, combos, open, close, path);
  const isClose = close < open;
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
  dfs(n, combos, open, (close + 1), path);
  path.pop();
}

function permInStr(s1, s2) {
  const freq = {};

  for (let ch of s1) {
    freq[ch] = (freq[ch] || 0) + 1; 
  }

  let l = 0, r = 0, needed = s1.length;
  while (r < s2.length) {
    let curr = s2[r];
    if (freq[s2[r]] > 0) needed--;
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

function evalRPN(tokens) {
  let stack = [];
  let ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b)
  };
  for (let t of tokens) {
    if (ops[t]) {
      let top = stack.pop();
      let second = stack.pop();
      stack.push(ops[t](second, top));
    } else {
      stack.push(Number(t));
    }
  }
  return stack.pop();
}

function topKFreq(nums, k) {
  const freqMap = new Map();
  const bucket = [];
  const res = [];

  for (let n of nums) {
    freqMap.set(n, (freqMap.get(n) || 0) + 1);
  }
  for (let [num, freq] of freqMap) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (res.length === k) break;
  }
  return res;
}

var genParen = (n) => { return dfs(n) };

const dfs = (n, combos, open = 0, close = 0, path) => {
  const isBase = path.length === (n * 2);
  if (isBase) {
    combos.push(path.join(''));
    return combos;
  }

  const isOpen = open < n;
  if (isOpen) backTrackOpen(n, combos, open, close, path);
  const isClose = close < open;
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
  dfs(n, combos, open, (close + 1), path);
  path.pop();
}

function longestRepRepl(s, k) {
  const freq = new Map();
  let count = 0;
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

function dailyTemps(temps, stack = []) {
  const days = new Array(temps.length).fill(0);

  for (let day = 0; day < temps.length; day++) {
    if (canShrink(temps, day, stack)) {
      const prevColdDay = stack.pop();
      const diff = day - prevColdDay;
      days[prevColdDay] = diff;
    }
    stack.push(day);
  }
  return days;
}

const canShrink = (temps, day, stack) => {
  const prevDay = stack[stack.length - 1];
  const [prevTemp, currTemp] = [temps[prevDay], temps[day]];
  const isWarmer = prevTemp < currTemp;
  return isWarmer && stack.length;
}
