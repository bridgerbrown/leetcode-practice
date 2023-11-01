function pascalsTriangle(rows) {
  if (!rows || rows.length <= 0) return [];
  let pascals = [[1]];
  for (let i = 1; i < rows; i++) {
    const prev = pascals[pascals.length - 1];
    const left = [...prev, 0];
    const right = [0, ...prev];
    const curr = left.map((r, i) => r + right[i]);
    pascals.push(curr);
  }
  return pascals;
}

function powerOfThree(n) {
  while (n > 1) {
    n /= 3;
  }
  return n === 1;
}

function hammingDistance(x, y) {
  return (x ^ y).toString(2).replace(/0/g, '').length;
}

function numberOf1Bits(n) {
  let sum = 0;
  while(n !== 0) {
    sum *= 2;
    sum += n & 1;
    n = n >>> 1;
  }
  return sum;
}

function validParentheses(s) {
  const map = {...};
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      arr.push(s[i]);
    } else {
      if (arr[arr.length - 1] == map[s[i]]) {
        arr.pop();
      } else return false;
    }
  }
  return arr.length === 0;
}

function romanToInteger(s) {
  const map = {...};
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if(map[s[i]] < map[s[i - 1]]) {
      count -= map[s[i]];
    } else {
      count += map[s[i]];
    }
  }
  return count;
}

function longestCommonPrefix(strs) {
  return strs.reduce((next, prev) => {
    const i = 0;
    if (prev[i] && next[i] && prev[i] == next[i]) i++;
    return prev.slice(0, i);
  })
}

function firstBadV(n, bad) {
  return function(n) {
    let left = 0, right = n;
    while (right - left !== 1) {
      const mid = Math.floor((left + right) / 2);
      isBadVersion(mid) ? right = mid : left = mid;
    }
    return right;
  }
}

function reverseBits(n) {
  let rev = 0, count = 32;
  while (count--) {
    rev *= 2;
    rev += n & 1;
    n >>> 1;
  }
  return rev;
}

function missingNumber(nums) {
  let sum = 0, total = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    total += i + 1;
  }
  return total - sum;
}
