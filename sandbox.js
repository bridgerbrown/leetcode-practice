function increment(digits) {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--){
    digits[i] += carry;
    carry = Math.floor(digits[i] / 10);
    digits[i] %= 10;
  }

  if (carry) digits.unshift(carry);

  return digits;
}

function rotate(nums, k) {
  k %= nums.length;
  function reverse(i, j) {
    while(i < j){
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  }

  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
}

function twice(nums){
  const numSet = new Set();
  for(let num of nums) {
    if (numSet.has(num)) return true;
    numSet.add(num);
  }
  return false;
}

function pair(nums, target) {
  const differences = {};
  for (let i = 0; i < nums.length; i++){
    let diff = target - nums;
    if (diff in differences) {
      return [i, differences[diff]];
    }
    differences[nums[i]] = i;
  }
}

function sudoku(board){
  const set = new Set();
  for (let i = 0; i < board.length; i++){
    for (let j = 0; j < board[0].length; j++){
      const value = board[i][j];

      if (value !== "."){
        let row = `${value} at row ${i}`;
        let col = `${value} at col ${j}`;
        let box = `${value} at box ${Math.floor(i / 3)}, ${Math.floor(j / 3)}`;

        if (set.has(row) || set.has(col) || set.has(box)){
          return false
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

function single(nums){
  const numSet = new Set();
  for (const num of nums) numSet.has(num) ? numSet.delete(num) : numSet.add(num);
  return numSet.values().next().value;
}

function moveZeroes(nums){
  let difference = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      difference++;
    } else {
      [nums[i], nums[i - diff]] = [nums[i - diff], nums[i]];
    }
  }
}

function rotate(nums, k) {
  k %= nums.length;
  function reverse(i, j) {
    while (i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  }

  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
}

function rotateImage(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++){
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < 1; j++){
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix[0].length - j - 1]
      matrix[i][matrix.length[0] - j - 1] = temp;
    }
  }
}

function sum(nums, target) {
  const differences = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in differences) {
      return [i, differences[diff]];
    } else {
      differences[nums[i]] = i;
    }
  }
}

function twoSum(nums, target) {
  const differences = {};
  for (let i = 0; i < nums.length; i++){
    const diff = target - nums[i];
    if (diff in differences) {
      return [i, differences[diff]];
    } else {
      differences[nums[i]] = i;
    }
  }
}

function rotate(matrix){
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < 1; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix[0].length - j - 1];
      matrix[i][matrix[0].length - j - 1] = temp;
    }
  }
}

function sudoku(board){
  const set = new Set();
  for (let i = 0; i < board.length; i++){
    for (let j = 0; j < board[0].length; j++){
      const value = board[i][j];

      if (value !== "."){

        const row = `${value} at row ${i}`;
        const col = `${value} at col ${j}`;
        const box = `${value} at box ${Math.floor(i / 3)}, ${Math.floor(j / 3)}`;

        if (set.has(row) || set.has(col) || set.has(box)){
          return false;
        } else {
          set.add(row);
          set.add(col);
          set.add(box);
        }
      }
    }
  }
}

function removeDuplicates(nums, k){
  let count = 1;
  for (let i = 1; i < nums.length; i++){
    if (nums[i - 1] != nums[i]) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
}

function increment(digits) {
  let carry = 1;
  for (let i = 0; i < digits.length; i++){
    digits[i] += carry;
    carry = Math.floor(digits[i] / 10);
    digits[i] %= 10;
  }
  if (carry) digits.unshift(carry);
  return digits;
}
