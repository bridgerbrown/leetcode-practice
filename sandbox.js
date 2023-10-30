function reverseBits(n) {
  let rev = 0, count = 32;
  while (count--) {
    rev *= 2;
    rev += n & 1;
    n >> 1;
  }
  return rev;
}

function numberOf1Bits(n) {
  let count = 0;
  while (n !== 0) {
    count += n & 1;
    n = n >>> 1;
  } 
  return sum;
}

function pascalsTriangle(numRows) {
  if (!numRows || numRows <= 0) return [];
  let pascals = [[1]];
  for (let i = 1; i < numRows; i++) {
    let prevRow = pascals[pascals.length - 1];
    let leftRow = [...pascals, 0];
    let rightRow = [0, ...pascals];
    let currRow = leftRow.map((r, i) => r += rightRow[i]);
    pascals.push(currRow);
  }
  return pascals;
}

function climbStairs(n) {
  let first = 1, second = 2, curr;
  if (n <= 2) return n;
  for (let i = 3; i < n; i++) {
    curr = first + second;
    first = second;
    second = curr;
  }
  return curr;
}

function powerOfThree(n) {
  while (n > 1) {
    n /= 3;
  }
  return n === 1;
}

function reverseBits(n) {
  let rev = 0, count = 32;
  while (count--) {
    rev *= 2;
    rev += n & 1;
    n >> 1;
  }
  return rev;
}

function romanToInteger(s) {
  const chars = {...}
  let results = 0;
  for (let i = 0; i < s.length; i++) {
    if (chars[s[i]] < chars[s[i + 1]]) {
      results -= chars[s[i]];
    } else {
      results += chars[s[i]];
    }
  }
  return results;
}

function validParentheses(s) {
  const chars = {};
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      arr.push(s[i]);
    } else {
      if (arr[arr.length - 1] === chars[s[i]]) {
        arr.pop();
      } else return false;
    }
  }
  return arr.length === 0;
}

function hammingDistance(x, y) {
  return (x ^ y).toString(2).replace(/0/g, "").length;
}

function numberOf1Bits(n) {
  let count = 0;
  while (n !== 0) {
    count += n & 1;
    n = n >>> 1;
  }
  return count;
}

function reverseBits(n) {
  let res = 0, count = 32;
  while (count--) {
    res *= 2;
    res += n & 1;
    n >> 1;
  }
  return res;
}

function numberOf1Bits(n) {
  let count = 0;
  while (n !== 0) {
    count += n & 1;
    n = n >>> 1;
  }
  return count;
}

function pascalsTriangle(rows) {
  if (!rows || rows <= 0) return [];
  let pascal = [[1]];
  for (let i = 1; i < rows; i++) {
    let prev = pascal[pascal.length - 1];
    let left = [...pascal, 0];
    let right = [0, ...pascal];
    let curr = left.map((r, i) => r + right[i]);
    pascal.push(curr);
  }
  return pascal;
}

function validParentheses(s) {
  const chars = {...};
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      arr.push(s[i]);
    } else {
      if (arr[arr.length - 1] == chars[s[i]]) {
        arr.pop();
      } else return false;
    }
  }
  return arr.length === 0;
}

function romanToInteger(s) {
  const chars = {...};
  const count = 0;
  for (let i = 0; i < s.length; i++) {
    if (chars[s[i]] < chars[s[i - 1]]) {
      count -= chars[s[i]];
    } else {
      count += chars[s[i]];
    }
  }
  return count;
}
