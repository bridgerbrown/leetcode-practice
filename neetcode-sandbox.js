function rpn(tokens) {
  let stack = [];
  let eval = {
    '+': (a, b) => { a + b },
    '-': (a, b) => { a - b },
    '*': (a, b) => { a * b },
    '/': (a, b) => { a / b },
  }
  for (let t of tokens) {
    if (eval[t]) {
      let top = stack.pop();
      let second = stack.pop();
      stack.push(eval[t](second, top));
    } else {
      stack.push(Number(t));
    }
  }
  return stack.pop();
}

function minWindSub(s, t) {
  let freq = {};
  let min = "";
  t.split('').forEach(ch => {
    freq[ch] = (freq[ch] || 0) + 1;
  });
  let l = 0, r = 0, unique = Object.keys(freq).length;
  while (r < s.length) {
    if (unique.length === 0) {
      let curr = s[l];
      if (freq[curr] !== undefined) freq[curr]++;
      if (freq[curr] > 0) unique++;

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

function containerMostWater(h) {
  let l = 0, r = h.length - 1;
  let max = 0;
  while (l < r) {
    const area = (r - l) * Math.min(h[l], h[r]);
    max = Math.max(max, square);
    if (h[l] < h[r]) {
      l++;
    } else {
      r--;
    }
  }
}

function longestConsSeq(nums) {
  const set = new Set(nums);
  let max = 0;
  
  for (let num of set) {
    if (set.has(num - 1)) continue;
    let currNum = num, currMax = 1;
    while (set.has(currNum + 1)) {
      currNum++, currMax++;
    }
    max = Math.max(max, currMax);
  }
  return max;
}

function slideWindMax(nums, k) {
  const idx = [];
  const res = [];
  let l = 0, r = 0;
  while (r < nums.length - 1) {
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

function trapRainWater(h) {
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
      curr = s2[l];
      if (freq[curr] >= 0) needed++;
      freq[curr]++;
      l++;
    }
  }
  return false;
}

function twoSumII(nums, target) {
  let [l, r] = [0, nums.length - 1];
  while (l < r) {
    const sum = nums[l] + nums[r];
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

function bs(nums, target) {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
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

function groupAnagrams(strs) {
  let obj = {};
  for (let str of strs) {
    let letters = str.split("").sort().join("");
    obj[letters] ? obj[letters].push(str) : obj[letters] = [str];
  }
  return Object.values(obj);
}

function trapRainWater(h) {
  let l = 0, r = h.length - 1;
  let lMax = h[l], rMax = h[r];
  let max = 0;
  while (l < r) {
    if (h[l] < h[r]) {
      l++;
      lMax = Math.max(h[l], lMax);
      max += lMax - h[l];
    } else {
      r--;
      rMax = Math.max(h[r], rMax);
      max += rMax - h[r];
    }
  }
  return max;
}

function slideWindMax(nums, k) {
  const idx = [];
  const res = [];
  let l = 0, r = 0;
  while (r < nums.length) {
    if (idx.length && nums[idx[idx.length - 1]] < nums[r]) {
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

function rpn(tokens) {
  let res = [];
  const op = {
    ...
  };
  for (let t of tokens) {
    if (op[t]) {
      let top = res.pop();
      let sec = res.pop();
      res.push(op[t](sec, top));
    } else {
      res.push(Number(t));
    }
  }
  return stack.pop();
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

function groupAnagrams(strs) {
  let obj = {};
  for (let str of strs) {
    let word = str.split("").sort().join('');
    obj[word] ? obj[word].push(str) : obj[word] = str;
  }
  return Object.values(obj);
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

function longestRepChRepl(s, k) {
  let freq = new Map() 
  let l = 0, r = 0;
  while (r < s.length) {
    let wind = r - l + 1;
    freq.set(s[r], (freq.get(s[r]) || 0) + 1);

    if ((wind - Math.max(...freq.values()) > k)) {
      freq.set(s[l], freq.get(s[l]) - 1);
      l++;
    }

    wind = r - l + 1;
    count = Math.max(count, wind);
  }
  return count;
}

function minWindSub(s, t) {
  let min = "", l = 0, r = 0;
  let freq = {};
  for (let ch of t) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  let unique = Object.keys(freq).length;
  while (r < s.length) {
    if (unique === 0) {
      let curr = s[l];
      if (freq[curr] !== undefined) freq[curr]++;
      if (freq[curr] >= 0) unique++;

      let temp = s.substring(l, r+1);
      min = (min === "" || min.length < temp.length) ? min : temp;
      l++;
    } else {
      r++;
      let curr = s[r];
      if (freq[curr] !== undefined) freq[curr]--;
      if (freq[curr] >= 0) unique--;
    }
  }
  return min;
}

function longestSubWoRepCh(s) {
  const set = new Set();
  let max = 0;
  let l = 0, r = 0;
  while (r < s.length) {
    r++;
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    set.add(s[r]);
    max = Math.max(max, r - l + 1);
  }
  return max;
}

function topKFreq(nums, k) {
  const freq = new Map();
  const bucket = [];
  const res = [];
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
