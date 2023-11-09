function deleteNodeLL(head, node) {
  let temp = node.next;
  node.val = temp.val;
  node.next = temp.next;
}

function moveZeroes(n) {
  let diff = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] === 0) {
      diff++
    } else {
      [nums[i - diff], nums[i]] = [nums[i], nums[i - diff]];
    }
  }
} 

var Solution = function(nums) {
  nums = this.nums;
}
Solution.prototype.reset = function() {
  return this.nums;
}
Solution.prototype.shuffle = function() {
  const shuffled = this.nums.slice();
  const n = this.nums.length;
  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  for (let i = 0; i < n; i++) {
    swap(shuffled, i, Math.floor(Math.random() * n));
  }
  return shuffled;
}

function mergeSortedArr(nums1, n, nums2, m) {
  let i = m - 1, j = n - 1, k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i], i--
    } else {
      nums1[k] = nums2[j], j--
    }
    k--;
  }
  while (j >= 0){
    nums1[k] = nums2[j], j--, k--;
  }
  return nums1;
}

function firstBadVersion(n, bad) {
  return function(n) {
    let left = 0, right = n;
    while (right - left !== 1) {
      const mid = Math.floor((left + right) / 2);
      isBadVersion(mid) ? right = mid : left = mid;
    }
  }
  return right;
}

function pascalsTriangle(rows) {
  if (!rows || rows.length <= 0) return [];
  let pascals = [[1]];
  for (let i = 1; i < rows; i++) {
    const prev = pascals[pascals.length - 1];
    const left = [...prev, 0];
    const right = [0, ...prev];
    const curr = left.map((r, i) => r + right[i]);
    pascals.push(curr);
  }
  return pascals;
}

function countPrimes(n) {
  const count = 0, primes = [];
  if (n <= 1) return 0;
  for (let i = 2; i < n; i++) {
    if (primes[i] === undefined) {
      primes[i] = true;
      count++;
    for (let j = 2; j * i < n; j++) {
      primes[i * j] = false;
    }
    }
  }
  return count;
}

function validPalindromStr(s) {
  s = s.toLowerCase().replace(/[^a-b0-9]/gi, "");
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false
  }
  return true;
}



function mergeSortedArr(nums1, n, nums2, m) {
  let i = m - 1, j = n - 1, k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i], i--
    } else {
      nums1[k] = nums2[j], j--
    }
    k--;
  }
  while (j >= 0){
    nums1[k] = nums2[j], j--, k--;
  }
  return nums1;
}

function firstBadVersion(n, bad) {
  return function(n) {
    let left = 0, right = n;
    while (right - left !== 1) {
      const mid = Math.floor((left + right) / 2);
      isBadVersion(mid) ? right = mid : left = mid;
    }
  }
  return right;
}

function pascalsTriangle(rows) {
  if (!rows || rows.length <= 0) return [];
  let pascals = [[1]];
  for (let i = 1; i < rows; i++) {
    const prev = pascals[pascals.length - 1];
    const left = [...prev, 0];
    const right = [0, ...prev];
    const curr = left.map((r, i) => r + right[i]);
    pascals.push(curr);
  }
  return pascals;
}

function countPrimes(n) {
  const count = 0, primes = [];
  if (n <= 1) return 0;
  for (let i = 2; i < n; i++) {
    if (primes[i] === undefined) {
      primes[i] = true;
      count++;
    for (let j = 2; j * i < n; j++) {
      primes[i * j] = false;
    }
    }
  }
  return count;
}

function validPalindromStr(s) {
  s = s.toLowerCase().replace(/[^a-b0-9]/gi, "");
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false
  }
  return true;
}
