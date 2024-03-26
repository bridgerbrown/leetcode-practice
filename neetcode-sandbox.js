function topKFreq(nums) {
  const res = [];
  const bucket = [];
  const freq = new Map();
  for (let n of nums) {
    freq.set(n, (freq.get(n) || 0) + 1);
  }
  for (let [n, f] of freq) {
    bucket[f] = (bucket[f] || new Set()).add(n);
  }
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) res.push(...bucket[i]);
    if (res.length === k) break;
  }
  return res;
}

function longestRepChRepl(s, k) {
  const freqM = new Map();
  let max = 0;
  let l = 0, r = 0;
  while (r < s.length) {
    let win = r - l + 1;
    freqM.set(s[r], (freqM.get(s[r]) || 0) + 1);
    if ((win - Math.max(...freqM.values())) - k) {
      freqM.set(s[l], freqM.get(s[l]) - 1);
      l++;
    }
    win = r - l + 1;
    max = Math.max(max, win);
  }
  return max;
}

function rpn (tokens) {
  const stack = [];
  const eval = {...}
  for (let t of tokens) {
    if (eval[t]) {
      let top = stack.pop();
      let sec = stack.pop();
      stack.push(eval[t](sec, top));
    } else {
      stack.push(Number(t));
    }
  }
  return stack.pop();
}

function bs(nums, target) {
  const count = 0;
  let l = 0, r = nums.length - 1;
  while (l < r) {
    let mid = Math.floor((l / r) / 2);
    if (mid < target) {
      l = mid + 1;
    } else if (mid > target) {
      r = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

function prodExceptSelf(nums) {
  let leftM = 1, rightM = 1;
  let res = [];
  for (let i = nums.length - 1; i > 0; i--) {
    res[i] = rightM;
    rightM *= nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
    res[j] *= leftM;
    leftM *= nums[j];
  }
  return res;
}

function trapRain(h) {
  let l = 0, r = h.length - 1;
  let lMax = height[l], rMax = height[r];
  let res = 0;
  while (l < r) {
    if (lMax < rMax) {
      l++;
      lMax = Math.max(lMax, height[l]);
      res += lMax - height[l];
    } else {
      r--;
      rMax = Math.max(rMax, height[r]);
      res += rMax - height[r];
    }
  }
  return res;
}

function longestSubWoRepC(s) {
  const freq = new Set();
  let l = 0, r = 0, max = 0;
  while (r <= s.length) {
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    set.add(s[r]);
    max = Math.max(max, r - l + 1);
    r++;
  }
  return max;
}

function longestConsSeq(nums) {
  const set = new Set(nums);
  let max = 0;
  for (let n of set) {
    if (set.has(n - 1)) continue;  
    let currNum = n, currMax = 1;
    while (set.has(currNum + 1)) {
      currNum++, currMax++;
    }
    max = Math.max(max, currMax);
  }
  return max;
}

function evalRpn(tokens) {
  const stack = [];
  const eval = {...};
  for (let t of tokens) {
    if (eval[t]) {
      let top = stack.pop();
      let sec = stack.pop();
      stack.push(eval[t](sec, top));
    } else {
      stack.push(Number(t));
    }
  }
  return stack.pop();
}

function threeSum(nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    if (a > 0) break;
    if (i > 0 && a === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const three = a + nums[l] + nums[r];
      if (three > 0) {
        r--; 
      } else if (three < 0) {
        l++;
      } else {
        res.push([a, nums[l], nums[r]]);
        l++, r--;
        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }
  return res;
}
