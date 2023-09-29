function distinct(nums) {
  let set = new Set();
  for (let num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
}

function anagram(s, t) {
  if (s.length !== t.length) return false;
  const charCount = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    charCount[s.charCodeAt(i) - 97]++;
    charCount[t.charCodeAt(i) - 97]--;
  }
  return charCount.every(count => count === 0);
}

function longestCommonPrefix(strs) {
  if (strs === undefined || strs.length === 0) return "";
  return strs.reduce((prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  });
};

function strStr(haystack, needle) {
  if (!needle.length) return 0;
  return haystack.indexOf(needle);
}

function reverseLL(head) {
  let cur = head, prev = null, temp = null;
  while (cur) {
    let temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return prev;
}

function mergeLLs(list1, list2) {
  let merged = new Node();
  let head = merged;
  for (let i = 0; i < list1.length; i++) {
    if (list1.val < list2.val) {
      merged.next = new Node(list1.val);
      list1 = list1.next
    } else {
      merged.next = new Node(list2.val);
      list2 = list2.next
    }
    merged = merged.next;
  }
  merged.next = list1 || list2;
  return head;
}

function reverseInt(x) {
  const revAbs = Math.abs(x).toString().split("").reverse().join("");
  if (revAbs > 2 ** 31) return 0;
  return revAbs * Math.sign(x);
}

function removeNthLL(head, n) {
  let fast = head, slow = head;
  for (let i = 0; i < n; i++) fast = fast.next;
  if (!fast) return head.next;
  while (fast && fast.next) {
    slow = slow.next, fast = fast.next;
  } 
  slow.next = slow.next.next;
  return head;
}

function removeNode(head, node) {
  let temp = node.next;
  node.val = temp.val;
  node.next = temp.next;
}

function moveZeroes(nums) {
  let diff = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      diff++
    } else {
      [nums[i - diff], nums[i]] = [nums[i], nums[i - 1]];
    }
  }
}

function reverseInt(num) {
  const abs = Math.abs(num).toString().split("").reverse().join("");
  const parsed = parseInt(abs)
  if (parsed > 2 ** 31) return 0;
  return parsed * Math.sign(x) 
}

function myAtoi(s) {
  return Math.max(-(2 ** 31), Math.min(2 ** 31 - 1, parseInt(s) || 0));
}

function palindromell(head){
  let fast = head, slow = head, temp, prev;
  while (fast && fast.next) slow = slow.next, fast = fast.next.next;
  prev = slow, prev.next = null, slow = slow.next;
  while (slow) {
    temp = slow.next,
    slow.next = prev,
    prev = slow,
    slow = temp;
  }
  fast = head, slow = prev;
  while (slow) {
    if (slow.val !== fast.val) return false;
    fast = fast.next, slow = slow.next;
  }
  return true;
}

function strPalindrom(s) {
  s = s.toLowerCase().replace(/[^a-zO-9]/gi, "");
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false;
  }
  return true;
}

function longestCommonPrefix(strs) {
  if (strs === undefined || strs.length === 0) return "";
  return strs.reduce((prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  })
}

function cycleLl(head, pos) {
  let fast = head;
  while (fast && fast.next) {
    if (head.val === fast.val) return true;
    head = head.next, fast = fast.next.next;
  }
  return false;
}

function strStr(haystack, needle) {
  if (!needle.length) return 0;
  return haystack.indexOf(needle);
}

function mergeLLs(list1, list2) {
  const merged = new Node();
  const head = merged;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      merged.next = new Node(list1.val);
      list1 = list1.next;
    } else {
      merged.next = new Node(list2.val);
      list2 = list2.next;
    }
    merged = merged.next
  }
  merged.next = list1 || list2;
  return head;
}

function strsAnagram(s, t) {
  if (s.length !== t.length) return false;
  const letters = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    letters[s.charCodeAt(i) - 97]++;
    letters[t.charCodeAt(i) - 97]--;
  }
  return letters.every(count => count === 0);
}

function reverseLL(head) {
  let prev = null, cur = head, temp = null;
  while (cur) {
    temp = cur.next,
    cur.next = prev,
    prev = cur,
    cur = temp
  }
  return prev;
}
