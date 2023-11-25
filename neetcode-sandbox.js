function productExceptSelf(nums) {
  const answer = [];
  let leftMult = 1;
  let rightMult = 1;
  for (let i = nums.length - 1; i >= 0; i--){
    answer[i] = rightMult;
    rightMult *= nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
    answer[j] *= leftMult;
    leftMult *= nums[j];
  }
  return answer;
}

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

function topKFrequent(nums, k) {
  const freq = new Map();
  const bucket = [];
  const result = [];

  for (let num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  for (let [num, f] of freq) {
    bucket[f] = (bucket[f] || new Set()).add(num);
  }
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }
  return result;
}

function groupAnagrams(strs) {
  let obj = {};
  for (let str of strs) {
    let letters = str.split("").sort().join("");
    obj[letters] ? obj[letters].push(str) : obj[letters] = [str];
  }
  return Object.values(obj);
}
