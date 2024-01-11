var Solution = function(nums) {
  this.nums = nums;
}
Solution.prototype.reset = function() {
  return this.nums;
}
Solution.prototype.shuffle = function() {
  const shuffled = this.nums.slice();
  const n = shuffled.length;
  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };
  for (let i = 0; i < n; i++) {
    swap(shuffled, i, Math.floor(Math.random() * n));
  }
  return shuffled;
}

function firstUnique(s) {
  const freq = {};
  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) return i;
  }
  return -1;
}

function rotateArray(nums, k) {
  k %= nums.length;
  const reverse = (i, j) => {
    while (i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++, j--;
    }
  }
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
}

function arrIntersection(nums1, nums2) {
  const freq = {};
  const intersection = [];
  for (let num of nums1) {
    freq[num] = (freq[num] || 0) + 1;
  }
  for (let num of nums2) {
    if (freq[num] > 0) {
      intersection.push(num);
      freq[num]--
    }
  }
  return intersection;
}

function missingNumber(nums) {
  let sum = 0, total = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    total += i + 1;
  }
  return total - sum;
}

function longestCommonPrefix(strs) {
  if (strs === undefined || strs.length === 0) return "";
  return strs.reduce((prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  })
}

function duplicates(nums) {
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) {
      return true;
    } else {
      set.add(num);
    }
  }
  return false;
}

function cyclicLL(head, pos) {
  let fast = slow = head;
  while (fast && fast.next) {
    fast = fast.next.next, slow = slow.next;
    if (fast == slow) return true;
  }
  return false;
}

function missingNumber(nums) {
  let total = 0, sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    total += i + 1;
  }
  return total - sum;
}

function mergeTwoLL(list1, list2) {
  let merged = new Node();
  let head = merged;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      merged.next = new Node(list1.val);
      list1 = list1.next;
    } else {
      merged.next = new Node(list2.val);
      list2 = list2.next;
    }
    merged = merged.next;
  }

  merged.next = list1 || list2;
  return head.next;
}
