function twoSum(nums, target) {
  const differences = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in differences) return [i, differences[diff]];
    differences[nums[i]] = i;
  }
}

function longestCommonPrefix(strs) {
  if (strs === undefined || strs.length === 0) return "";
  return strs.reduce((prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  })
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
      freq[num]--;
    }
  }

  return intersection;
}

function atoi(s) {
  return Math.max(-(2 ** 31), Math.min(2 ** 31 - 1, parseInt(s) || 0));
}

function romanToInteger(s) {
  const chars = {...};
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (chars[s[i]] < chars[s[i + 1]]) {
      count -= chars[s[i]];
    } else {
      count += chars[s[i]];
    }
  }
  return count;
}

function stocks(prices) {
  let buy = 0, sell = 1, max = 0;
  for (let i = 0; i < prices.length; i ++) {
    let profit = prices[sell] - prices[buy];
    if (prices[buy] < prices[sell]) {
      max = Math.max(max, profit);
    } else {
      buy = sell;
    }
    sell++;
  }
  return max;
}

function maxProfit(prices) {
  const count = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      let profit = prices[i] - prices[i - 1];
      count += profit;
    }
  }
  return count;
}

function symmetricTree(root) {
  if (!root) return true;
  const DFS = (left, right) => {
    if (!left && !right) return true;
    if (!left && right || left && !right || left.val !== right.val) return false;
    DFS(left.left, right.right), DFS(left.right, right.left);
  }
  return DFS(root.left, root.right);
}

function removeDuplicates(nums, k) {
  const count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      count++
      nums[i] = nums[k];
    } 
  }
  return count;
}

function validateBST(root) {
  const BST = (root, min, max) => {
    if (!root) return true;
    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) return false;
    BST(root.left, min, root), BST(root.right, root, max);
  }
  return BST(root, null, null);
}

function llCycle(head) {
  let fast = head;
  while (fast && fast.next) {
    head = head.next, fast = fast.next.next;
    if(head === fast) return true;
  } 
  return false;
}
