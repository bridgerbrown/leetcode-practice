function stocks(prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > prices[i + 1]) {
      profit += prices[i] - prices[i + 1];
    }
  }
  return profit;
}

function singleNumber(nums) {
  let numSet = new Set();
  for (let num of nums) {
    if (numSet.has(num)) {
      numSet.delete(num);
    } else {
      numSet.add(num);
    }
  }
  return numSet.values().next().value;
}

function twoSum(nums, target){
  const differences = {};
  for (let i = 0; i < nums.length; i++){
    const diff = target - nums[i];
    if (diff in differences) return [i, differences[diff]];
    differences[nums[i]] = i;
  }
}
