function strStr(haystack, needle) {
  if (!needle.length) return 0;
  return haystack.indexOf(needle);
}

function reverseStr(str) {
  for (let i = 0, j = str.length; i <= j; i++, j--) {
    const temp = str[i];
    str[i] = str[j];
    str[j] = temp;
  }
}

function palindromeLl(head) {
  let fast = slow = head, temp, prev;
  while (fast && fast.next) fast = fast.next.next, slow = slow.next;
  prev = slow, slow = slow.next, prev.next = null;
  while (slow) {
    temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = slow.next
  }
  fast = head, slow = prev;
  while (slow) {
    if (fast.val !== slow.val) return false;
    fast = fast.next, slow = slow.next;
  }
  return true
}

function reverseInt(x) {
  const abs = Math.abs(x).toString().split("").reverse().join("").parseInt();
  if (abs > 2 ** 31) return 0;
  return abs * Math.sign(x);
}

function moveZeroes(nums) {
  const diff = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      diff++
    } else {
      [nums[i - diff], nums[i]] = [nums[i], nums[i - diff]]
    }
  }
}

function firstUniqueChar(str) {
  const freq = {};
  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (freq[str[i]] === 1) return i;
  }
  return -1;
}

function longestPrefix(strs) {
  if (strs === undefined || strs.length === 0) return "";
  return strs.reduce((prev, next) => {
    const i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.splice(0, i);
  })
}

function anagramStrs(s, t) {
  if (s.length !== t.length) return false;
  const alphabet = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    alphabet[s.charCodeAt(i) - 97]++;
    alphabet[t.charCodeAt(i) - 97]--;
  }
  return alphabet.every(count => count === 0);
}

function palindromStr(str) {
  str = str.toLowerCase().replace(/[^a-b0-9]/gi, "");
  for (let i = 0, j = str.length; i <= j; i++, j--) {
    if (str[i] !== str[j]) return false;
  }
  return true;
}

function strAtoi(str) {
  return Math.max(-(2 ** 31), Math.min(2 ** 31 - 1, parseInt(s) || 0));
}
