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
  const pascal = [[1]];
  for (let i = 1; i < rows.length; i++) {
    const prevRow = pascal[pascal.length - 1];
    const leftRow = [...prevRow, 0];
    const rightRow = [0, ...prevRow];
    const currRow = leftRow.map((r, i) => r + rightRow[i]);
    pascal.push(currRow);
  }
  return pascal;
}

function hammingDistance(x, y) {
  return (x ^ y).toString(2).replace(/0/g, '').length;
}

function powerOfThree(n) {
  while (n > 1) {
    n /= 3;
  }
  return n === 1;
}

function validParentheses(s) {
  const chars = {...};
  let track = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      track.push(s[i]);
    } else {
      if (track[track.length - 1] == chars[s[i]]) {
        track.pop();
      } else return false;
    }
  }
  return track.length === 0;
}

function romanToInteger(s) {
  const chars = {...};
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (chars[s[i]] < chars[s[i + 1]]) {
      count -= chars[s[i]];
    } else {
      count += chars[s[i]];
    }
  }
  return count;
}

function missingNumber(nums) {
  let count = total = 0;
  for (let i = 0; i < nums.length; i++) {
    count += nums[i];
    total += i + 1;
  }
  return total - count;
}

function climbStairs(n) {
  if (n <= 2) return n;
  let first = 1, second = 2, curr;
  for (let i = 3; i < n; i++) {
    curr = first + second;
    first = second;
    second = curr;
  }
  return second;
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
  let count = 0, total = 32;
  while (total--) {
    count *= 2;
    count += n & 1;
    n = n >> 1
  }
  return count;
}
