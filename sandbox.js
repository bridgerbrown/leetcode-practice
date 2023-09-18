function moveZeroes(nums) {
  let diff = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      diff++
    } else {
      [nums[i - diff], nums[i]] = [nums[i], nums[i - diff]]
    }
  };
};

function addOne(digits) {
  let carry = 1;
  for (i = digits.length - 1; i >= 0; i--) {
    digits[i] += carry;
    carry = Math.floor(digits[i] / 10);
    digits[i] %= 10;
  }
  if (carry) digits.unshift(carry);
  return digits;
}; // O(n) time, O(1) space

function intersection(nums1, nums2){
  const frequency = {};
  const intersect = [];

  for (let num of nums1) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  for (let num of nums2) {
    if (frequency[num] > 0) {
      intersect.push(num);
      frequency[num]--;
    }
  }

  return intersect;
} // O(n + m) time, O(n) space

function distinct(nums){
  const unique = new Set();
  for(let num of nums) {
    if (unique.has(num)) return true;
    unique.add(num)
  }
  return false;
} // O(n), O(1)

function rotate(nums, k) {
  k %= nums.length;

  const reverse = (i, j) => {
    while (i < j) {
      let temp = nums[i];
      nums[j] = nums[i];
      nums[i] = temp;
      i++
      j--
    }
  }

  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  revres(k, nums.length - 1);
}; // O(n), O(1)

function stocks(prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) if (prices[i + 1] > prices[i]) profit += prices[i + 1] - prices[i];
  return profit;
}
