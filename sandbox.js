function sum(nums, target) {
  const differences = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in differences) return [i, differences[diff]];
    differences[nums[i]] = i;
  }
}

function plusOne(digits){
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += carry;
    carry = Math.floor(digits[i] / 10);
    digits[i] %= 10;
  }
  if (carry) digits.unshift(carry);
  return digits;
}

function unique(nums) {
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] != nums[i]) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
}

function sum(nums, target) {
  let difference = {};
  for (let i = 0; i < nums.length; i++){
    const diff = target - nums[i];
    if (diff in differences) return [i, differences[diff]];
    differences[nums[i]] = i;
  }
}

function sudoku(board) {
  const set = new Set();

  for (let i = 0 ; i < board.length; i++){
    for (let j = 0; j < board[0].length; j++){
      const value = board[i][j];

      if (value !== ".") {
        const row = `${value} at row ${i}`;
        const col = `${value} at col ${j}`;
        const box = `${value} at box ${Math.floor(i / 3)}, ${Math.floor(j / 3)}`;
        if (set.has(row) || set.has(col) || set.has(box)) {
          return false;
        } else {
          set.add(row);
          set.add(col);
          set.add(box);
        }
      }
    }
  }
  return true;
}

function duplicates(nums) {
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]){
      nums[count] = nums[i];
      count++
    }
  }
  return count;
}

function unique(nums){
  const set = new Set();
  for (let num of nums) set.has(num) ? set.delete(num) : set.add(num);
  return set.values().next().value;
}

function intersection(nums1, nums2) {
  const frequency = {};
  const intersection = [];

  for (num of nums1) {
    frequency[num] = (frequncy[num] || 0) + 1;
  }

  for (num of num2) {
    if (frequency[num] > 0) {
      intersection.push(num);
      frequency[num]--;
    }
  }
  return intersection;
}
