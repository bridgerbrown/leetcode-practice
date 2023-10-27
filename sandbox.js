function pascalsTriangle(numRows) {
  if (!numRows || numRows <= 0) return [];
  const pascal = [[1]];
  for (let i = 1; i < numRows; i++) {
    const prevRow = pascal[pascal.length - 1];
    const shiftLeft = [...prevRow, 0];
    const shiftRight = [0, ...prevRow];
    const currentRow = shiftLeft.map((r, i) => r + shiftRight[i]);
    pascal.push(currentRow);
  }
  return pascal;
}

function romanToInteger(s) {
  const map = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  };
  const results = 0;
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] < map[s[i + 1]]) {
      results -= map[s[i]];
    } else {
      results += map[s[i]];
    }
  }
  return results;
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
}

function numberOf1Bits(n) {
  let count = 0;
  while (n != 0) {
    count += n & 1;
    n = n >>> 1;
  }
  return count;
}

function numberOf1Bits(n) {
  let count = 0;
  while (n != 0) {
    count += n & 1;
    n = n >>> 1;
  }
  return count;
}

function missingNumber(nums) {
  let sum = total = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    total += i + 1;
  }
  return total - sum;
}

function powerOfThree(n) {
  while (n > 1) {
    n /= 3;
  }
  return n === 1;
}

function houseRobber(nums){
  let prev = before = 0, temp;
  for (let i = 0; i < nums.length; i++) {
    temp = prev; 
    prev = Math.max(nums[i] + before, prev);
    before = temp;
  }
  return prev;
}

function validParentheses(s) {
  const p = {
    ')' : '(',
    '}' : '{',
    ']' : '[',
  };
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      arr.push(s[i]);
    } else {
      if (arr[arr.length - 1] === map[s[i]]) {
        arr.pop();
      } else return false;
    }
  }
  return arr.length === 0;
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

function houseRobber(nums) {
  let before = prev = 0, temp;
  for (let i = 0; i < nums.length; i++) {
    temp = prev;
    prev = Math.max(nums[i] + before, prev);
    before = temp;
  }
  return prev;
}

function pascalsTriangle(numRows) {
  if (!numRows || numRows <= 0) return [];
  const pascal = [[1]];
  for (let i = 1; i < numRows; i++) {
    const prevRow = pascal[pascal.length - 1];
    const shiftLeft = [...prevRow, 0];
    const shiftRight = [0, ...prevRow];
    const currentRow = shiftLeft.map((r, i) => r + shiftRight[i]);
    pascal.push(currentRow);
  }
  return pascal;
}

function missingNumber(nums) {
  let sum = total = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    total += i + 1;
  }
  return total - sum;
}
