function reverseLL(head) {
  let prev = temp = null, curr = head;
  while(curr) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
}

function hammingDistance(x, y) {
  return (x ^ y).toString(2).replace(/0/g, "").length;
}

function reverseBits(n) {
  let rev = 0, count = 32;
  while (count--) {
    rev *= 2;
    rev += n & 1;
    n = n >>> 1;
  }
  return rev;
}

function powerOfThree(n) {
  while (n > 1) {
    n /= 3;
  }
  return n === 1;
}

function strStr(haystack, needle) {
  if (!needle.length) return 0;
  return haystack.indexOf(needle);  
} 

function moveZeroes(nums) {
  let diff = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      diff++
    } else {
      [nums[i - diff], nums[i]] = [nums[i], nums[i - diff]];
    }
  }
}

function mergeSortedArr(nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1.val > nums2.val) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  while(j >= 0) {
    nums1[k] = nums2[j];
    j--, k--;
  }
  return nums1;
}

function validParentheses(s) {
  const map = {...};
  if (!s.length) return true;
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[" ) {
      arr.push(s[i]);
    } else {
      if (arr[arr.length - 1] == s[i]) {
        arr.pop();
      } else return false;
    }
  }
  return arr.length === 0;
}

function validAnagram(s, t) {
  if (s.length !== t.length) return false;
  const alph = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    alph[s.charCodeAt(i) - 97]++;
    alph[t.charCodeAt(i) - 97]--;
  }
  return alph.every((char) => char === 0);
}

function validPalindromStr(s) {
  const chars = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  for (let i = 0, j = chars.length - 1; i <= j; i++, j--) {
    if (chars.charAt(i) !== chars.charAt[j]) return false;
  }
  return true;
}
