function pascalsTriangle(rows) {
  const pascals = [[1]];
  if (rows === undefined || !rows.length) return pascals;
  for (let i = 1; i < rows; i++) {
    const prev = pascals[pascals.length - 1];
    const left = [...prev, 0];
    const right = [0, ...prev];
    const curr = left.map((r, i) => r + right[i]);
    pascals.push(curr);
  }
  return pascals;
}

function validateBST(root) {
  if (!root) return true;
  const BST = (root, min, max) => {
    if (!root) return true;
    if ((min !== null && min > root.val) || (max !== null && max < root.val)) return false;
    BST(root.left, min, root), BST(root.right, root, max);
  }
  return BST(root, null, null);
}

function btLevelTraversal(root) {
  const arr = [];
  if (!root) return arr;
  const DFS = (node, level) => {
    arr[level] = [...(arr[level] || []), node.val];
    if (node.left) DFS(node.left, level + 1);
    if (node.right) DFS(node.right, level + 1);
  }
  DFS(root, 0);
  return results;
};

function fizzBuzz(n) {
  const r = [];
  for (let i = 0; i < n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      r.push("FizzBuzz");
    } else if (i % 3 === 0) {
      r.push("Fizz");
    } else if (i % 5 === 0) {
      r.push("Buzz");
    } else {
      r.push(i.toString());
    }
  }
  return r;
}

function powerOfThree(n) {
  while (n > 1) {
    n /= 3;
  }
  return n === 1;
}

function mergeSortedLLs(list1, list2) {
  const merged = new ListNode();
  const head = merged;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      merged.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      merged.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    merged = merged.next;
  }
  merged.next = list1 || list2;
  return head.next;
}

function longestCommonPrefix(strs) {
  if (strs === undefined || strs.length === 0) return "";
  return strs.reduce((prev, next) => {
    const i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  })
}

function arrayIntersection(nums1, nums2) {
  const freq = {};
  const arr = [];

  for (let num of nums1) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (let num of nums2) {
    if (freq[num] > 0) {
      arr.push(num);
      freq[num]--;
    }
  }
  return arr;
}

function firstBadVersion(n, bad) {
  return function(n) {
    let left = 0, right = n;
    while (right - left !== 1) {
      const mid = Math.floor((left + right) / 2);
      isBadVersion(mid) ? right = mid : left = mid;
    }
    return right;
  }
}

function twoSum(nums, target) {
  const differences = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in differences) return [i, differences[diff]];
    differences[nums[i]] = i;
  }
}
