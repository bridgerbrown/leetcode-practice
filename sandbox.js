function countPrimes(n) {
  let count = 0;
  let primes = [];
  if (n <= 1) return 0;
  for (let i = 2; i < n; i++) {
    if (primes[i] === undefined) {
      count++;
      primes[i] = true;
    } 
    for (let j = 2; i * j < n; j++) {
      primes[i * j] = false;
    }
  }
  return count;
}

function convertSortedArrToBST(nums) {
  const BST = (left, right) => {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2);
    const current = new Node(nums[mid]);
    current.left = BST(left, mid - 1);
    current.right = BST(mid + 1, right);
    return current;
  }
  return BST(0, nums.length - 1);
}

function twoSum(nums, target) {
  let differences = {}
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in differences) return [i, differences[diff]];
    differences[nums[i]] = i;
  }
}

function longestCommonPrefix(strs) {
  return strs.reduce((prev, next) => {
    const i = 0;
    while (prev[i] && next[i] && prev[i] == next[i]) i++;
    return prev.slice(0, i);
  })
}

function btLevelTraversal(root) {
  const levels = [];
  if (!root) return levels;
  const DFS = (node, level) => {
    levels[level] = [...(levels[level] || []), node.val];
    if (node.left) DFS(node.left, level + 1);
    if (node.right) DFS(node.right, level + 1);
  }
  DFS(root, 0);
  return levels;
}

function missingNumber(nums) {
  let count = total = 0;
  for (let i = 0; i < nums.length; i++) {
    count += i + 1;
    total += nums[i];
  }
  return count - total;
}

function incrementArray(digits) {
  let carry = 1;
  for (let i = digits.length - 1; i > 0; i--){
    digits[i] += carry;
    carry = Math.floor(digits[i] / 10);
    digits[i] %= 10;
  }
  if (carry) digits.unshift(carry);
  return digits;
}

function rotateArray(nums, k) {
  k %= nums.length;
  const reverse = (i, j) => {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    i++, j--;
  }
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
}

function arrayIntersection(nums1, nums2) {
  let freq = {};
  let intersection = [];
  for (let num of nums1) {
    freq[num] = (freq[num] || 0) + 1;
  }
  for (let num of nums2) {
    if (freq[num] > 0) { 
      intersection.push(num);
      freq[num]--;
    }
  }
  return intersection;
}
