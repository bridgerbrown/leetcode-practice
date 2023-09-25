function removeDuplicates(nums, k) {
  let count = 1;
  let numSet = new Set();
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[count] = nums[i]
      count++;
    }
  }
  return count;
}
// [1, 2, 2, 3]

function moveZeroes(nums) {
  let diff = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      [nums[i], nums[i - diff]] = [nums[i - diff], nums[i]];
    } else {
      diff++;
    }
  }
  return nums;
};
// [0, 1, 0, 2]

function llPalindrome(head) {
  let slow = head, fast = head, prev, temp;
  while (fast && fast.next) slow = slow.next, fast = fast.next.next;
  prev = slow, slow = slow.next, prev.next = null;
  while (slow) temp = slow.next, slow.next = prev, prev = slow, slow = temp;
  fast = head, slow = prev;
  while (slow) 
    if (fast.val !== slow.val) return false;
    else fast = fast.next, slow = slow.next;
  return true;
}

function shift(nums, k) {
  k %= nums.length;
  
  const reverse = (start, end) => {
    while (start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }

  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
}

function mergeTwoLists(list1, list2) {
  let merged = new ListNode();
  let head = merged;

  while (list1 !== null && list2 !== null) {
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

function removeNode(head, node) {
  let temp = node.next;
  node.val = temp.val;
  node.next = temp.next;
}

function palindrome(head) {
  let slow = head, fast = head, temp, prev;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  prev = slow, slow = slow.next, prev.next = null
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

function singleDigit(nums) {
  const numSet = new Set();
  for (let num of nums) numSet.has(num) ? numSet.delete(num) : numSet.add(num);
  return numSet.values().next().value;
}

function hasCycle(head) {
  let fast = head;
  while (fast && fast.next) {
    head = head.next;
    fast = fast.next.next;
    if (head === fast) return true;
  }
  return false;
}

function removeNode(head, node) {
  let temp = node.next;
  node.val = temp.val;
  node.next = temp.next;
}

function reverseLl(head){
  let prev = null, cur = head, temp = null;
  while (cur) {
    temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return prev;
}
