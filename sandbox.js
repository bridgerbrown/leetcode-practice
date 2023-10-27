function missingNumber(nums) {
  let count = 0, total = 0;
  for (let i = 0; i < nums.length; i++) {
    count += nums[i];
    total += i + 1;
  }
  return total - count;
}

function validParentheses(s) {
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
      arr.push(s[i]);
    } else {
      if (arr[arr.length - 1] === map[s[i]]) {
        arr.pop();
      } else return false;
    }
  }
  return arr.length === 0;
}

function powerOfThree(n) {
  while (n > 1) {
    n /= 3;
  }
  return n === 1;
}

function reverseBits(n) {
  let result = 0, count = 32;
  while (count--) {
    result *= 2;
    result += n & 1;
    n = n >> 1;
  }
  return result;
}

function countPrimes(n) {
  let count = 0, primes = [];
  if (n <= 1) return count;
  for (let i = 2; i < n; i++) {
    if (primes[i] == undefined) {
      primes[i] = true, count++;
      for (let j = 2; j * i < n; j++) {
        primes[i * j] = false;
      }
    } 
  }
  return count;
}

function hammingDistance(x, y) {
  return (x ^ y).toString(2).replace(/0/g, '').length;
}

function reverseBits(n) {
  let result = 0, count = 32;
  while (count--) {
    result *= 2;
    result += n & 1;
    n = n >> 1;
  }
  return result;
}

function maxSubarray(nums) {
  let prev = 0, max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(nums[i] + prev, nums[i]);
    max = Math.max(prev, max);
  }
  return max;
}

function pascalsTriangle(numRows) {
  if (!numRows || numRows <= 0) return [];
  let pascals = [[1]];
  for (let i = 0; i < numRows; i++) {
    const prevRow = pascals[pascals.length - 1];
    const leftRow = [...prevRow, 0];
    const rightRow = [0, ...prevRow];
    const currRow = leftRow.map((r, i) => r + rightRow[i]);
    pascals.push(currRow);
  }
  return pascals;
}

function romanToInteger(s) {
  let symb = {
    ...
  }
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (symb[s[i]] < symb[s[i + 1]]) {
      count -= symb[s[i]];
    } else {
      count += symb[s[i]];
    }
  }
  return count;
}

function numberOf1Bits(n) {
  let count = 0;
  while (n !== 0) {
    count += n & 1;
    n = n >>> 1;
  }
  return count;
}

function houseRobber(nums) {
  let before = prev = 0, curr;
  for (let i = 0; i < nums.length; i++) {
    curr = prev;
    prev = Math.max(nums[i] + before, prev);
    before = curr;
  }
  return prev;
}

function hammingDistance(x, y) {
  return (x ^ y).toString(2).replace(/0/g, '').length;
}

function validParentheses(s) {
  const chars = {...};
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
      arr.push(s[i]);
    } else {
      if (arr[arr.length - 1] == chars[s[i]]) {
        arr.pop();
      } else return false;
    }
  }
  return arr.length === 0;
}

function reverseBits(n) {
  let res = 0, count = 32;
  while (count--) {
    res *= 2;
    res += n & i;
    n >> 1;
  }
  return res;
}
