function houseRobber(nums) {
  let before = prev = 0;
  for (let i = 0; i < nums.length; i++) {
    let temp = prev;
    prev = Math.max(nums[i] + before, prev);
    before = temp;
  }
  return prev;
}

function climbStairs(n) {
  if (n <= 2) return n;
  let first = 1, second = 2, curr;
  for (let i = 3; i <= n; i++) {
    curr = first + second;
    first = second;
    second = curr;
  }
  return curr;
}

function countPrimes(n) {
  const primes = [];
  const count = 0;
  if (n <= 1) return count;
  for (let i = 2; i < n; i++) {
    if (primes[i] === undefined) {
      primes[i] = true, count++;
      for (let j = 2; j * i < n; j++) {
        primes[i * j] = false; 
      }
    } 
  }
  return count;
}

Solution.prototype.shuffle = function() {
  const shuffled = this.nums.slice();
  const n = this.nums.length;
  const swap = (arr, i, j) => {
    let temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
  }
  for (let i = 0; i < n; i++) {
    swap(shuffled, i, Math.floor(Math.random() * n));
  }
  return shuffled;
}

function mergeSortedArrs(nums1, n, nums2, m) {
  let i = n - 1, j = m - 1, k = n + m - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i], i--;
    } else {
      nums1[k] = nums2[j], j--;
    }
    k--;
  }
  while (j >= 0) {
    nums1[k] = nums2[j], j--, k--;
  }
  return nums1;
}

function maxSubarray(nums) {
  let prev = 0, max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(nums[i] + prev, nums[i]);
    max = Math.max(prev, max);
  }
  return max;
}

function strStr(haystack, needle) {
  if (!needle.length) return 0;
  return haystack.indexOf(needle);
}

function bestBuySellStock(prices) {
  let buy = 0, sell = 1, max = 0;
  while (sell <= prices.length) {
    if (prices[buy] < prices[sell]) {
      let profit = prices[sell] - prices[buy];
      max = Math.max(profit, max);
    } else {
      buy = sell;
    }
    sell++;
  }
  return max;
}

function maxSubarray(nums) {
  let prev = 0, max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(nums[i] + prev, nums[i]) 
    max = Math.max(prev, max);
  }
  return max;
}

function houseRobber(nums) {
  let before = prev = 0;
  for (let i = 0; i < nums.length; i++) {
    let temp = prev;
    prev = Math.max(nums[i] + before, prev);
    before = temp;
  }
  return prev;
}

function countPrimes(n) {
  if (n <= 1) return 0;
  const primes = [], count = 0;
  for (let i = 2; i < n; i++) {
    if (primes[i] == undefined) {
      primes[i] = true, count++;
      for (let j = 2; j * i < n; j++) {
        primes[j * i] = false;
      }
    } 
  }
  return count;
}

function climbStairs(n) {
  let first = 1, second = 2, curr;
  if (n <= 2) return n;
  for (let i = 3; i <= n; i++) {
    curr = first + second;
    first = second;
    second = curr;
  }
  return curr;
}

function strStr(haystack, needle){
  if (!needle.length) return 0;
  return haystack.indexOf(needle);
} 

function climbStairs(n) {
  let first = 1, second = 2, curr;
  if (n <= 2) return n;
  for (let i = 3; i <= n; i++) {
    curr = first + second;
    first = second;
    second = curr;
  }
  return curr;
}

function mergeSortedArr(nums1, n, nums2, m) {
  let i = n - 1, j = m - 1, k = n + m - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i], i--;
    } else {
      nums1[k] = nums2[j], j--;
    }
    k--;
  }
  while(j >= 0) {
    nums1[k] = nums2[j], j--, k--;
  }
  return nums1;
}

function strStr(haystack, needle) {
  if (!needle.length) return 0;
  return haystack.indexOf(needle);
}

function countPrimes(n) {
  if (n <= 1) return 0;
  const primes = [], count = 0;
  for (let i = 2; i < n; i++) {
    if (primes[i] == undefined) {
      primes[i] = true, count++;
      for (let j = 2; j * i < n; j++) {
        primes[i * j] = false; 
      }
    } 
  }
  return count;
}

function houseRobber(nums) {
  let before = prev = 0;
  for (let i = 0; i < nums.length; i++) {
    let temp = prev;
    prev = Math.max(nums[i] + before, prev);
    before = temp;
  }
  return prev;
}
