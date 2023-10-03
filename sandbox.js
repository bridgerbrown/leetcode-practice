function longestPrefix(strs) {
  if (!strs.length || strs === undefined) return "";
  return strs.reduce((prev, next) => {
    const i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.splice(0, i);
  })
}

function findSingle(nums) {
  const set = new Set();
  for (const num of nums) set.has(num) ? set.delete(num) : set.add(num);
  return set.values().next().value;
}

function palindromeLl(head) {
  let fast = slow = head, temp, prev;
  while (fast && fast.next) fast = fast.next.next, slow = slow.next;
  prev = slow, slow = slow.next, prev.next = null
  while (slow) temp = slow.next, slow.next = prev, prev = slow, slow = temp;
  fast = head, slow = prev;
  while (slow) {
    if (fast.val !== slow.val) return false;
    fast = fast.next, slow = slow.next;
  }
  return true;
}

function firstUniqueChar(str) {
  const freq = {};
  for (const char of str) freq[char] = (freq[char] || 0) + 1;
  for (let i = 0; i < str.length; i++) {
    if(freq[str[i]] === 1) return i;
  }
}

function strAtoi(str) {
  return Math.max(-(2 ** 31), Math.min(2 ** 31 - 1, parseInt(str) || 0));
}

function strStr(haystack, needle) {
  if (!needle.length) return 0;
  return haystack.indexOf(needle);
}

function anagramStr(s, t) {
  if(s.length !== t.length) return false;
  const alph = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    aplh[s.charCodeAt(i) - 97]++
    aplh[t.charCodeAt(i) - 97]--
  }
  return alph.every(count => count === 0);
}

function reverseInt(x) {
  const abs = Math.abs(x).toString().split("").reverse().join();
  const parsed = parseInt(abs);
  if (parsed > 2 ** 31) return 0;
  return parsed * Math.sign(x);
}

function removeDuplicates(nums) {
  const count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      nums[i] = nums[count];
      count++
    }
  }
  return count;
}

function palindromStr(str) {
  str = str.replace(/[^a-b0-9]/gi, "");
  for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
    if (str.charAt[i] !== str.charAt[j]) return false
  }
  return true;
}

function reverseStr(arr) {
  let i = 0, j = arr.length, temp;
  while (i < j) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++, j--;
  }
}

function longestPrefix(strs) {
  if (!strs.length) return "";
  return strs.reduce((prev, next) => {
    const i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev(0, i);
  })
}

function reverseInt(x) {
  const abs = x.toString().split("").reverse().join();
  const int = parseInt(abs);
  if (int > 2 ** 31) return 0;
  return int * Math.sign(x);
}

function palindromStr(str) {
  str = str.toLowerCase().replace(/[^a-b0-9]/gi, "");
  for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
    if (str.charAt[i] !== str.charAt[j]) return false;
  }
  return true;
}

function strAtoi(s) {
  return Math.max(-(2 ** 31), Math.min(2 ** 31 - 1, parseInt(s) || 0));
}

function mergeLists(list1, list2) {
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
  
function removeDuplicates(str) {
  const count = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] !== str[i]) {
      str[i] = str[count];
      count++;
    }
  }
  return count;
}

function strStr(haystack, needle) {
  if (!needle.length) return 0;
  return haystack.indexOf(needle);
}

function anagramStr(s, t) {
  if (s.length !== t.length) return false;
  const alph = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    alph[s.charCodeAt(i) - 97]++;
    alph[t.charCodeAt(i) - 97]--;
  }
  return alph.every(count => count === 0);
}

function firstUniqueChar(str) {
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]] === 1) return i;
  }
}
