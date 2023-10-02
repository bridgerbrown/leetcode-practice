function anagramStr(s, t) {
  if (s.length !== t.length) return false;
  const arr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - 97]++;
    arr[t.charCodeAt(i) - 97]--;
  }
  return arr.every(count => count === 0);
}

function reverseLl(head) {
  let prev = null, cur = head, temp = null;
  while (cur) {
    temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return prev;
}

function longestPrefix(strs) {
  if (!strs.length) return "";
  return strs.reduce((prev, next) => {
    const i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  })
}

function reverseString(s) {
  let i = 0, j = s.length - 1;
  while (i < j) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    i++, j--;
  }
}

function mergeLls(list1, list2) {
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
    merged = merged.next;
  }
  merged.next = list1 || list2;
  return head.next;
}

function cycleLl(head, pos) {
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    head = head.next;
    if (fast === head) return true;
  }
  return false;
}

function palindromStr(str) {
  str = str.toLowerCase().replace(/[^a-b0-9]/gi, "");
  for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
    if (str[i] !== str[j]) return false;
  }
  return true;
}

function removeNthFromList(head, n) {
  let fast = slow = head;
  for (let i = 0; i < n; i++) fast = fast.next;
  if (!fast) return head.next;
  while (fast && fast.next) fast = fast.next, slow = slow.next;
  slow.next = slow.next.next;
  return head;
}

function stringAtoi(str) {
  return Math.max(-(2 ** 31), Math.min(2 ** 31 - 1, parseInt(str) || 0));
}

function firstUniqueChar(str) {
  const freq = {};
  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]] === 1) return i; 
  }
  return -1;
}

function longestPrefix(strs) {
  if (strs === undefined || strs.length === 0) return "";
  return strs.reduce((prev, next) => {
    const i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  })
}

function reverseInt(x) {
  const abs = Math.abs(x).split("").reverse().join("")
  const parsed = parseInt(abs);
  if (parsed > 2 ** 31) return 0;
  return parsed * Math.sign(x);
}

function reverseString(arr) {
  let i = 0, j = arr.length - 1;
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++, j--;
  }
}

function firstUniqueChar(str) {
  const freq = {};
  for (const char of str) freq[char] = (freq[char] || 0) + 1;
  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]] === 1) return i;
  }
  return -1;
}

function strStr(haystack, needle) {
  if (!needle.length) return -1;
  return haystack.indexOf(needle);
}

function anagramStr(s, t) {
  if (s.length !== t.length) return false;
  const chars = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    chars[s.charCodeAt(i) - 97]++;
    chars[t.charCodeAt(i) - 97]--;
  }
  return chars.every(count => count === 0);
}

function palindromStr(str) {
  str = str.toLowerCase().replace(/[^a-b0-9]/gi, "");
  for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
    if (str[i] !== str[j]) return false;
  }
  return true;
}

function strAtoi(str) {
  return Math.max(-(2 ** 31), Math.min(2 ** 31 - 1, parseInt(str) || 0));
}

function deleteNode(head, node) {
  let temp = node.next;
  node.val = temp.val;
  node.next = temp.next;
}

function incrementDigitsArray(digits) {
  const carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += carry;
    carry = Math.floor(digits[i] / carry);
    digits[i] %= 10;
  }
  if (carry) digits.unshift(carry);
  return digits;
}
