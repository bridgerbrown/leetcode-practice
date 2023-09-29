function twoSum(nums, target) {
  const differences = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in differences) return [i, differences[diff]];
    differences[nums[i]] = i;
  }
}

function mergeLL(list1, list2) {
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
  return head;
}

// [1, 2, 2, 3]
function removeDuplicates(nums, k) {
  let count = 1;
  for (let i = 1; i < nums.length; i++){
    if (nums[i] != nums[i - 1]) {
      nums[i] = nums[count];
      count++
    }
  }
  return count;
}

function unique(nums) {
  let set = new Set();
  for (let num of nums) set.has(num) ? set.delete(num) : set.add(num);
  return set.values().next().value;
}

function palindromeLL(head) {
  let fast = head, slow = head, temp, prev;
  while (fast && fast.next) {
    slow = slow.next, fast = fast.next.next;
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

function removeNthLL(head, n) {
  let fast = head, slow = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  if (!fast) return head.next;
  while (fast.next) {
    fast = fast.next, slow = slow.next;
  }
  slow.next = slow.next.next;
  return head
}

function removeNode(head, node) {
  let nxt = node.next;
  node.val = nxt.val;
  node.next = nxt.next;
}

function llCycle(head, pos) {
  let fast = head, slow = head;
  while (fast && fast.next) {
    if (fast === slow) return true;
    fast = fast.next.next, slow = slow.next;
  }
  return false
}

function moveZeroes(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[i - count]] = [nums[i - count], nums[i]]
    } else {
      count++;
    }
  }
}

function reverseLL(head) {
  let prev = null, cur = head, nxt = null;
  while (cur) {
    nxt = cur.next,
    cur.next = prev, 
    prev = cur, 
    cur = nxt;
  }
  return prev
}

function rotateM(matrix){
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix[0].length - j - 1];
      matrix[i][matrix[0].length - j - 1] = temp;
    }
  }
}

function shift(nums, k) {
  k %= nums.length;

  const reverse = (i, j) => {
    while (i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++
      j--
    }
  }
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
}

function moveZeroes(nums) {
  let diff = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      diff++;
    } else {
      [nums[i - diff], nums[i]] = [nums[i], nums[i - diff]];
    }
  }
}

function removeNode(head, node) {
  let nxt = node.next;
  node.val = nxt.val;
  node.next = nxt.next;
}

function llCycle(head, pos) {
  let fast = head;
  while (fast && fast.next) {
    head = head.next;
    fast = fast.next.next;
    if (head === fast) return true;
  }
  return false;
}

function removeDuplicates(nums) {
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] != nums[i]) {
      nums[count] = nums[i];
      count++
    }
  }
}

function mergeLL(list1, list2) {
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
  return head;
}

function removeNthLL(head, n) {
  let fast = head, slow = head;
  for (let i = 0; i < n; i++) fast = fast.next;
  if (!fast) return head.next;
  while (fast && fast.next) slow = slow.next, fast = fast.next;
  slow.next = slow.next.next;
  return head;
}

function palindromeLL(head) {
  let fast = head, slow = head, prev, temp;
  while (fast && fast.next) slow = slow.next, fast = fast.next.next;
  prev = slow, slow = slow.next, prev.next = null;
  while (slow) {
    temp = slow.next,
    slow.next = prev,
    prev = slow,
    slow = temp
  }
  fast = head, slow = prev;
  while (slow) {
    if (slow.val !== fast.val) return false
    slow = slow.next, fast = fast.next;
  }
  return true;
}

function reverseLL(head) {
  let prev = null, temp = null, cur = head;
  while (cur) {
    temp = cur.next,
    cur.next = prev,
    prev = cur,
    cur = temp
  }
  return prev;
}
