function mergeLL(list1, list2) {
  const list3 = new Node();
  const head = list3;

  while (list1 !== null && list2 !== null) {
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

function shift(nums, k) {
  k %= nums.length;

  const reverse = (i, j) => {
    while(i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  }
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
}

function removeNthFromEnd(head, n) {
  let fast = head, slow = head;
  for (let i = 0; i < n; i++) fast = fast.next;
  if (!fast) return head.next;
  while (fast.next) fast = fast.next, slow = slow.next;
  slow.next = slow.next.next;
  return head;
} 
 
// 1, 2, 3
// t = 5
function twoSum(nums, target) {
  let differences = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in differences) return [nums[i], differences[diff]];
    differences[nums[i]] = i;
  }
};

function cycleLL(head, pos) {
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next, head = head.next;
    if (head === fast) {
      return true
    }
  }
  return false;
}

function deleteNode(head, node) {
  let temp = node.next;
  node.val = temp.val;
  node.next = temp.next;
}

function reverseLL(head) {
  let prev = null, cur = head, nxt = null;
  while (cur) {
    nxt = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nxt;
  }
  return prev;
}

function duplicates(nums) {
  let numSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (numSet.has(nums[i])) return true;
    numSet.add(nums[i]);
  }
  return false;
}

function palindrome(head) {
  let fast = head, slow = head, prev, temp;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  prev = slow, slow = slow.next, prev.next = null;
  while (slow) {
    temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }
  fast = head, slow = prev;
  while (slow) {
    if (fast.val !== slow.val) return false;
    else fast = fast.next, slow = slow.next;
  }
  return true;
}

function rotateImage(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix.length[0] - j - 1];
      matrix[i][matrix[0].length - j - 1] = temp;
    }
  }
}

function removeNthFromEnd(head, n) {
  let fast = head, slow = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  while (fast.next) {
    fast = fast.next, slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
}

function palindrome(head) {
  let fast = head, slow = head, prev, temp;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  prev = slow, slow = slow.next, prev.next = null;
  while (slow) {
    temp = slow.next, slow.next = prev, prev = slow, slow = temp;
  }
  fast = head, slow = prev;
  while (slow) {
    if (fast.val !== slow.val) return false;
    else fast = fast.next, slow = slow.next;
  }
  return true;
}

function increment(digits) {
  let carry = 1;
  for (let i = digits.length; i >= 0; i--) {
    digits[i] += carry;
    carry = Math.floor(digits[i] / 10);
    digits[i] %= 10;
  }
  if (carry) digits.unshift(carry);
  return digits;
}

function reverseLL(head) {
  let prev = null, cur = head, nxt = null;
  while (cur) {
    nxt = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nxt;
  }
  return prev;
}

function twoSum(nums, target) {
  let differences = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in differences) return [i, differences[diff]];
    differences[nums[i]] = i;
  }
}

function mergeSortedLLs(list1, list2) {
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

function removeDuplicates(nums, k) {
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[i] = nums[count];
      count++
    }
  }
  return count;
}

function removeNode(head, node) {
  let nxt = node.next;
  node.val = nxt.val;
  node.next = nxt.next;
}

function cycleLL(head, pos) {
  let fast = head;
  while (fast && fast.next) {
    head = head.next;
    fast = fast.next.next;
    if (head === fast) return true;
  }
  return false;
}

function shift(nums, k) {
  k %= nums.length;
  const reverse = (i, j) => {
    while (i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  }
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
}
