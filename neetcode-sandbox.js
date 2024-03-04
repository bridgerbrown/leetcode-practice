function longestConsecutive(nums) {
  if (nums == null || nums.length === 0) return 0;
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

function generateParen(n) { 
  dfs(n);
}

const dfs = (n, combos = [], open = 0, close = 0, path = []) => {
  const isBaseCase = (path.length === (n * 2));
  if (isBaseCase) {
    combos.push(path.join(''));
    return combos;
  }

  const isOpen = open < n;
  if (isOpen) btOpen(n, combos, open, close, path);
  const isClose = close < open;
  if (isClose) btClose(n, combos, open, close, path);

  return combos;
}

const btOpen = (n, combos, open, close, path) => {
  path.push('(');
  dfs(n, combos, (open + 1), close, path);
  path.pop();
}

const btClose = (n, combos, open, close, path) => {
  path.push(')');
  dfs(n, combos, open, (close + 1), path);
  path.pop();
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
        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }
  return res;
}

function search(nums, target) {
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

function longestConsecutive(nums) {
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

function generateParen(n) {
  dfs(n);
}

const dfs = (n, combos = [], open = 0, close = 0, path = []) {
  const isBaseCase = (path.length === (n * 2));
  if (isBaseCase) {
    combos.push(path.join(''));
    return combos;
  }

  const isOpen = open < n;
  if (isOpen) btOpen(n, combos, open, close, path);
  const isClose = open > close;
  if (isClose) btClose(n, combos, open, close, path);

  return combos;
}

const btOpen = (n, combos, open, close, path) => {
  path.push('(');
  dfs(n, combos, (open + 1), close, path);
  path.pop();
}
const btClose = (n, combos, open, close, path) => {
  path.push(')');
  dfs(n, combos, open, (close + 1), path);
  path.pop();
}

function trap(height) {
  if (!height) return 0;
  let l = 0, r = height.length - 1;
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

function dailyTemps(temps) {
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
        r--
      } else if (threeSum < 0) {
        l++
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
