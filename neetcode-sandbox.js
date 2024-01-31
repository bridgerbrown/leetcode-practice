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
      const threeSum = a + nums[l] + nums[r];
      if (threeSum > 0) {
        r--;
      } else if (threeSum < 0) {
        l++;
      } else {
        res.push([a, nums[l], nums[r]]);
        l++, r--;
        while (nums[l] === nums[l - 1] && l < r) l++;
      }
    }
  }
}

function trap(height) {
  let l = 0, r = height.length - 1;
  const lMax = height[l];
  const rMax = height[r];
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

function maxArea(height) {
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

function topFreqElem(nums, k) {
  const freq = new Map();
  const bucket = [];
  const res = [];
  for (let num of nums) {
    freq.set(freq.get(num) || 0) + 1;
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

function twoSumII(nums, target) {
  let res = [];
  let l = 0, r = nums.length - 1;
  while (l < r) {
    const sum = nums[l] + nums[r];
    if (sum === target) return [l + 1, r + 1];
    if (sum < target) {
      l++;
    } else {
      r--;
    }
  }
  return [-1, -1];
}

function trap(height) {
  let l = 0, r = height.length - 1;
  const lMax = height[l];
  const rMax = height[r];
  let count = 0;
  while (l < r) {
    if (lMax < rMax) {
      l++;
      lMax = Math.max(lMax, height[l]);
      count += lMax - height[l];
    } else {
      r--;
      rMax = Math.max(rMax, height[r]);
      count += rMax - height[r];
    }
  }
  return count;
}

function threeSum(nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    if (curr > 0) break;
    if (i > 0 && curr === nums[i - 1]) continue;

    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      const sum = curr + nums[l] + nums[r];
      if (sum < 0) {
        l++;
      } else if (sum > 0) {
        r--;
      } else {
        res.push([curr, nums[l], nums[r]]);
        while (nums[l] === nums[l - 1] && l < r) l++;        
      }
    }
  }
  return res;
}

function topKFreq(nums) {
  const freq = new Map();
  const bucket = [];
  const res = [];
  for (let num of nums) {
    freq.set(freq.get(num) || 0) + 1;
  }
  for (let [num, f] of freq) {
    bucket[f] = (bucket[f] || new Set()).add(num);
  }
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) res.push(...bucket(i));
    if (res.length === k) break;
  }
  return res;
}

function productExceptSelf(nums) {
  const res = [];
  let lMult = 1, rMult = 1;
  for (let i = nums.length - 1; i > 0; i--) {
    res[i] = rMult;
    rMult *= nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
    res[i] *= lMult;
    lMult *= nums[j];
  }
  return res;
}

function twoSumII(nums, target) {
  let l = 0, r = nums.length - 1;
  while (l < r) {
    const sum = nums[l] + nums[r];
    if (sum === target) return [l + 1, r + 1];
    if (sum < target) {
      l++;
    } else {
      r--;
    }
  }
  return [-1, -1];
}

function longestRepChar(s, k) {
  const freq = new Map();
  let count = 0;
  for (let r = 0; r < s.length; r++) {
    let wind = r - l + 1;
    freq.set(s[r], (freq.get(s[r]) || 0) + 1);

    if ((wind - Math.max(...freq.values())) > k) {
      freq.set(s[l], freq.get(s[l]) - 1);
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
  let l = 0, r = 0;
  while (r < nums.length - 1) {
    while (idx.length && nums[idx[idx.length - 1]] < nums[i]) {
      idx.pop();
    }
    idx.push(i);
    if (l > idx[0]) idx.shift();
    if (r - l + 1 === k) {
      res.push(nums[idx[0]]);
      l++;
    }
    r++;
  }
  return res;
}

function longestSubWoRepCh(s) {
  let freq = new Set();
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

function containerMostWater(height) {
  let l = 0, r = height.length - 1;
  const res = 0;
  while (l < r) {
    const square = r - l + 1 * (Math.min(height[l] , height[r]));
    res = Math.max(res, area);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return res;
}

function threeSum(nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (curr > 0) break;
    if (i > 0 && curr === nums[i - 1]) continue;
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const sum = curr + nums[l] + nums[r];
      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        res.push([curr, nums[l], nums[r]]);
        l++, r--;
        while (nums[l] === nums[l - 1] && l < r) l++;
      }
    }
  }
  return res;
}
