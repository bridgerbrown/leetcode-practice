function palStr(str) {
  str = str.toLowerCase().replace(/[^a-b0-9]/gi, "");
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str.charAt(i) !== str.charAt(j)) return false;
  }
  return true;
}

function revLL(head) {
  let temp = prev = null, cur = head;
  while (cur) {
    temp = cur.next,
    cur.next = prev,
    prev = cur,
    cur = temp;
  }
  return prev;
}

function mergeLLs(list1, list2) {
  const merged = new Node();
  const head = merged;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      merged.next = new Node(list1.val),
      list1 = list1.next;
    } else {
      merged.next = new Node(list2.val),
      list2 = list2.next;
    }
    merged = merged.next;
  }
  merged.next = list1 || list2;
  return head.next;
}

function strAtoi(str) {
  return Math.max(-(2 ** 31), Math.min(2 ** 31 - 1, parseInt(str) || 0));
}

function anagramStr(s, t) {
  const alph = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    alph[s.charCodeAt(i) - 97]++; 
    alph[t.charCodeAt(i) - 97]--; 
  }
  return alph.every(count => count === 0);
}

function removeDup(arr) {
  const count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i]) {
      arr[count] = arr[i];
      count++;
    } 
  }
  return count;
}

function symmetricTree(root) {
  if (!root) return true;
  const DFS = (left, right) => {
    if (!left && !right) return true;
    if (left && !right || !left && right || left.val !== right.val) return false;
    DFS(left.right, right.left), DFS(left.left, right.right);
  }
  return DFS(root.left, root.right);
}

function findUnique(nums) {
  const set = new Set();
  for (const num of nums) set.has(num) ? set.delete(num) : set.add(num);
  return set.values().next.value;
}

function maxDepth(root) {
  if (!root) return null; 
  let max = Math.max(maxDepth(root.left), maxDepth(root.right));
  return max + 1;
}

function moveZeroes(nums) {
  const diff = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      diff++;
    } else {
      [nums[i - diff], nums[i]] = [nums[i], nums[i - diff]];
    }
  }
}
