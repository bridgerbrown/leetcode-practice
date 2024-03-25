function prodExcSelf (nums) {
  let leftM = 1;
  let rightM = 1;
  const res = [];
  for (let i = nums.length - 1; i > nums.length; i--){
    res[i] = rightM;
    rightM *= nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
    res[j] *= leftM;
    leftM *= nums[j];
  }
  return res;
}

function permInStr(s1, s2) {
  const freq = {};
  for (let ch of s1) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  let l = 0, r = 0, needed = s1.length;
  while (r <= s2.length) {
    if (freq[s2[r]] > 0) needed--;
    freq[s2[r]]--;
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

function binarySearch(nums, target) {
  let l = 0, r = nums.length - 1;

  while (l < r) {
    let mid = Math.floor((l / r) / 2);
    if (nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

function dailyTemps(temps, stack = []) {
  const days = new Array(temps.length).fill(0);

  for (let i = 0; i < temps.length; i++) {
    while (canShrink(temps, stack, i)) {
      const prevColdDay = stack.pop();
      const diff = (i - prevColdDay);
      days[prevColdDay] = diff;
    }
    stack.push(i);
  }
  return days;
}

const canShrink = (temps, stack, day) => {
  const prevDay = stack[stack.length - 1];
  const [prevTemp, currTemp] = [temps[prevDay], temps[day]];
  const isWarmer = prevTemp < currTemp;
  return isWarmer && stack.length;
}

function genParenth(n) { return dfs(n); };

const dfs = (n, open = 0, close = 0, stack = [], combos = []) => {
  const bc = (stack.length === (n * 2));
  if (bc) {
    combos.push(stack.join(''));
    return combos;
  }

  const isOpen = open < n;
  if (isOpen) rOpen(n, open, stack, combos);
  const isClose = close < open;
  if (isClose) rClose(n, close, stack, combos);

  return combos;
}

const rOpen = (n, open, stack, combos) => {
  stack.push('(');
  dfs(n, (open + 1), stack, combos);
  stack.pop();
}

const rClose = (n, close, stack, combos) => {
  stack.push(')');
  dfs(n, (close + 1), stack, combos);
  stack.pop();
}

function longestRepChRepl(s, k) {
  const freqM = new Map();
  max = 0;
  let l = 0, r = 0;
  while (r <= s.length) {
    let win = r - l + 1;
    freqM.set(s[r], (freqM.get(s[r]) || 0) + 1);

    if ((win.length - Math.max(...freqM.values())) > k) {
      freqM.set(s[l], freqM.get(s[l]) - 1);
      l++;
    }
    win = r - l + 1;
    max = Math.max(max, win);
    r++;
  }
  return max;
}

function evalRevPolishNot(tokens) {
  let stack = [];
  let ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b),
  };
  for (let t of tokens) {
    if (ops[t]) {
      let top = stack.pop();
      let sec = stack.pop();
      stack.push(ops[t](sec, top));
    } else {
      stack.push(Number(t));
    }
  }
  return stack.pop();
}


function permInStr(s1, s2) {
  if (s1.length > s2.length) return false;
  const freq = {};
  for (let ch of s1) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  let l = 0, r = 0, need = s1.length - 1;
  while (r <= s.length) {
    let curr = s2[r];
    if (freq[curr] > 0) need--;
    freq[curr]--;
    r++;

    if (need === 0) return true;

    if (r - l > s1.length) {
      let curr = s2[l];
      if (freq[curr] > 0) need++;
      freq[curr]++;
      l++;
    }
  }
  return false;
}

function trapRainWater(h) {
  if (!height) return 0;
  let l = 0, r = h.length - 1;
  let lMax = h[l], rMax = h[r];
  let res = 0;

  while (l < r) {
    if (lMax < rMax) {
      l++;
      lMax = Math.max(lMax, h[l]);
      res += lMax - h[l];
    } else {
      r--;
      rMax = Math.max(rMax, h[r]);
      res += rMax - h[r];
    }
  }
  return res;
} 

function topKFreq(nums, k) {
  const freq = new Map(); 
  const res = [];
  const bucket = [];
  for (let num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  for (let [num, f] of freq) {
    bucket[f] = (bucket[f] || new Set()).add(num);
  }
  for (let i = bucket.length - 1; i >= 0; i--){
    if (bucket[i]) res.push(...bucket[i]);
    if (res.length === k) break;
  }
  return res;
}
