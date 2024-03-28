function binarySearch(nums, target) {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    let mid = Math.floor((l / r) / 2);
    let curr = nums[mid];
    if (curr < target) {
      l = mid + 1;
    } else if (mid > target) {
      r = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

function twoSumII(nums, target) {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
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

function trapRainWater(h) {
  let l = 0, r = h.length - 1;
  let lMax = 0, rMax = 0;
  let max = 0;

  while (l <= r) {
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

function longestConsSeq(nums) {
  let set = new Set(nums);
  let count = 0;

  for (let num of set) {
    if (set.has(num - 1)) continue;
    let currNum = num, currMax = 1;
    while (set.has(currNum + 1)) {
      currMax++;
      currNum++;
    }
    count = Math.max(count, currMax);
  }
  return count;
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
      let sum = nums[i] + nums[r] + nums[l];
      if (sum < 0) {
        l++;
      } else if (sum > 0) {
        r--;
      } else {
        res.push([nums[i], nums[r], nums[l]]);
        l++, r--;
        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }      
      }
    }
  }
  return res;
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
      const sum = a + nums[l] + nums[r];
      if (sum < 0) {
        l++;
      } else if (sum > 0) {
        r--;
      } else {
        res.push([a, nums[l], nums[r]]);
        l++, r--;
        while (nums[l + 1] === nums[l] && l < r) {
          l++;
        }
      }
    }
  }
  return res;
}

function longestConsSeq(nums) {
  let set = new Set(nums);
  let max = 0;
  for (let num of nums) {
    if (set.has(num - 1)) continue;
    let currnum = num, currmax = 1;
    while (set.has(currnum + 1)) {
      currnum++, currmax++;
    }
    max = Math.max(currmax, max);
  }
  return max;
}

function productExceptSelf(nums) {
  let res = [];
  let lM = 1, rM = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = rM;
    rM *= nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
    res[j] *= lM;
    lM *= nums[j];
  }
  return res;
}

function trapRainWater(h) {
  let l = 0, r = h.length - 1;
  let lMax = 0, rMax = 0;
  let max = 0;
  while (l < r){
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

function containerMostWater(h) {
  const res = 0;
  let l = 0, r = h.length - 1;
  while (l < r) {
    const area = (r - l) * Math.min(h[l], h[r]);
    res = Math.max(res, area);
    if (h[l] < h[r]) {
      l++;
    } else {
      r--;
    }
  }
  return res;
}

function trapRainWater(h) {
  let l = 0, r = h.length - 1;
  let lm = 1, rm = 1;
  let max = 0;
  while (l < r) {
    if (h[l] < h[r]) {
      l++;
      lm = Math.max(lm, l);
      max += lm - h[l];
    } else {
      r--;
      rm = Math.max(rm, r);
      max += rm - h[r];
    }
  }
  return max;
}

function minWindSub(s, t) {
  let min = "";
  const freq = {};
  t = t.split('');
  for (let ch of t) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  let l = 0, r = 0, unique = Object.keys(freq).length;
  while (r < s.length) {
    if (unique === 0) {
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
    let square = (r - l) * Math.min(h[l], h[r]);
    let max = Math.max(square, max);
    if (h[l] < h[r]) {
      l++;
    } else {
      r--;
    }
  }
  return max;
}

function genParenth(n) { return dfs(n) };

function dfs(n, combos = [], stack = [], open = 0, close = 0) {
  if (stack.length === (n * 2)) {
    stack.join('');
    combos.push(stack);
    return combos;
  }

  const isOpen = open < n;
  if (isOpen) btOpen(n, combos, stack, open, close);
  const isClose = close < open;
  if (isClose) btClose (n, combos, stack, open, close);

  return combos;
}

const btOpen = (n , combos, stack, open, close) => {
  stack.push('(');
  dfs(n, combos, stack, (open + 1), close);
  stack.pop();
}

const btClose = (n , combos, stack, open, close) => {
  stack.push(')');
  dfs(n, combos, stack, open, (close + 1));
  stack.pop();
}

function slideWinMax(nums, k) {
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
