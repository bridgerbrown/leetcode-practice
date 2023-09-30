function uniqueChar(str) {
  let set = new Set();
  let arr = str.split("");
  for (let letter of arr) {
    if (set.has(letter)) {
      return str.indexOf(letter);
    } else {
      set.add(letter);
    }
  }
} // O(n^2) though

function uniqueChar(str) {
  const freq = {};
  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]] === 1) return i;
  }
  return -1;
}

function removeNthLL(head, n) {
  let fast = slow = head;
  for (let i = 0; i < n; i++) fast = fast.next;
  if (!fast) return head.next;
  while (fast && fast.next) fast = fast.next, slow = slow.next;
  slow.next = slow.next.next;
  return head;
}

function mergeLL(list1, list2) {
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

function anagramStr(s, t) {
  if (s.length !== t.length) return fals;
  const count = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97]++;
    count[t.charCodeAt(i) - 97]--;
  }
  return count.every(count => count === 0);
}

function palindromeLL(head) {
  let fast = slow = head, temp, prev;
  while (fast && fast.next) fast = fast.next.next, slow = slow.next;
  prev = slow, prev.next = null, slow = slow.next;
  while (slow) {
    temp = slow.next,
    slow.next = prev,
    prev = slow,
    slow = temp;
  }
  fast = head, slow = prev;
  while (slow) {
    if (slow.val !== fast.next) return false;
    slow = slow.next, fast = fast.next;
  }
  return true;
}

function reverseLL(head) {
  let prev = temp = null, cur = head;
  while (cur) {
    temp = cur.next,
    cur.next = prev,
    prev = cur,
    cur = temp;
  }
  return prev;
}

function palindromeStr(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/gi, "");
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false;
  }
  return true;
}

function removeNode(head, node) {
  let temp = node.next;
  node.val = temp.val;
  node.next = temp.next;
}

function reverseStr(str) {
  let left = 0, right = s.length - 1;
  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = s[temp];
  }
}

function longestPrefix(strs) {
  if (strs === undefined || strs.length === 0) return "";
  return strs.reduce((prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  })
}
