function evalRPN(tokens) {
  const stack = [];
  const ops = {
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

function generateParen(n) {
  const DFS = (n, combos = [], open = 0, close = 0, path = []) => {
    const baseCase = (path.length === (n * 2));
    if (baseCase) {
      combos.push(path.join(''));
      return combos;
    }

    const isOpen = open < n;
    if (isOpen) backTrackOpen(n, combos, open, close, path);
    const isClose = close < open;
    if (isClose) backTrackClose(n, combos, open, close, path);
    
    return combos;
  }
  DFS(n);
}
const backTrackOpen = (n, combos, open, close, path) => {
  path.push('(');
  DFS(n, combos, (open + 1), close, path);
  path.pop();
}
const backTrackClose = (n, combos, open, close, path) => {
  path.push(')');
  DFS(n, combos, open, (close + 1), path);
  path.pop();
}

function threeSum(nums) {
  const res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let l = i + 1, r = nums.length - 1;
    const curr = nums[i];
    if (curr > 0) break;
    if (i > 0 && curr === nums[i - 1]) continue;

    while (l < r) {
      const sum = curr + nums[l] + nums[r];
      if (sum < 0) {
        l++;
      } else if (sum > 0) {
        r--;
      } else {
        res.push([curr, nums[l], nums[r]]);
        l++, r--;
        while (nums[l] === nums[l - 1] && l < r) l++;
      }
    }
  }
  return res;
}

function twoSumII(nums, target) {
  let l = 0, r = nums.length - 1;
  while (l < r) {
    const sum = nums[l] + nums[r];
    if (sum > target) {
      r--;
    } else if (sum < target) {
      l++;
    } else {
      return [l + 1, r + 1];
    }
  }
  return [-1, -1];
}

function longestRepChRep(s, k) {
  const freq = new Map();
  let max = 0;
  let l = 0, r = 0;
  while (r < s.length) {
    let wind = r - l + 1;

    freq.set(s[r], (freq.get(s[r]) || 0) + 1);

    if ((wind - Math.max(...freq.values())) > k) {
      freq.set(s[l], freq.get(s[l]) - 1);
      l++;
    }
    wind = r - l + 1;
    max = Math.max(max, wind);
    r++;
  }
  return max;
}

function containerWithMostWater(height) {
  const res = 0; 
  let l = 0, r = height.length - 1;
  while (l < r) {
    const area = (r - l) * Math.min(height[l], height[r]);
    res = Math.max(res, area);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return res;
}

function groupAnagrams(strs) {
  let obj = {};
  for (let str of strs) {
    let chars = str.split("").sort().join("");
    obj[chars] ? obj[chars].push(str) : obj[chars] = [str];
  }
  return Object.values(obj);
}

function longestRepChRep(s, k) {
  const count = 0;
  const freq = new Map();
  let l = 0, r = 0;
  while (r < s.length) {
    let wind = r - l + 1;
    freq.set(s[r], (freq.get(s[r]) || 0) + 1);
    
    if ((wind - Math.max(...freq.values())) > k) {
      freq.set(s[l], (freq.get[s[l]])--);
      l++;
    }
    wind = r - l + 1;
    count = Math.max(count, wind);
  }
  return count;
}

function slideWindMax(nums, k) {
  const idx = [];
  const res = [];

  let l = 0;
  for (let r = 0; r < r.length; r++) {
    while (idx.length && nums[idx[idx.length - 1]] < nums[r]) {
      idx.pop();
    }
    idx.push(r);
    if (l > idx[0]) idx.shift();
    if (r - l + 1 === k) {
      res.push(nums[idx[0]]);
      l++;
    }
  }
  return res;
}

function containerWithMostWater(height) {
  let l = 0, r = height.length - 1;
  let max = 0;
  while (l < r) {
    const area = (r - l) * Math.min(height[l], height[r]);
    max = Math.max(max, area);
    if (height[l] > height[r]) {
      r--;
    } else {
      l++;
    }
  }
  return max;
}

function longestWoRepCh(s) {
  const freq = new Set();
  let l = 0, r = 0;
  let max = 0;
  while (r < s.length) {
    if (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    set.add(s[r]);
    max = Math.max(max, r - l + 1);
    r++;
  }
  return max;
}

function minWindSub(s, t) {
  let freq = {};
  let min = "";
  for (let ch of t) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  let l = 0, r = -1, unique = Object.keys(freq).length;
  while (r < s.length) {
    if (unique.length === 0) {
      if (freq[s[l]] !== undefined) freq[s[l]]++;
      if (freq[s[l]] > 0) unique++;

      let temp = s.substring(l, r + 1);
      temp.length < min.length ? min = temp : min = min;
      l++;
    } else {
      r++;
      if (freq[s[r]] !== undefined) freq[s[r]]--;
      if (freq[s[r]] > 0) unique--;
    }
  }
  return min;
}
