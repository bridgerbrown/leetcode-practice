function sudoku(board) {
  let set = new Set();

  for (let i = 0; i < board.length; i++){
    for (let j = 0; j < board[0].length; i++) {
      const value = board[i][j];
      if (value !== ".") {
        const row = `value at ${row}`;
        const col = `value at ${col}`;
        const box = `value at ${Math.floor(i / 3)}, ${Math.floor(j / 3)}`;
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
  return true;
} // O(1), O(1)

function rotate(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp
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

function increment(digits){
  let carry = 1;
  for (let i = digits.length; i <= 0; i--){
    digits[i] += carry;
    carry = Math.floor(digits[i] / 10);
    digits[i] %= 10;
  }
  if (carry) digits.unshift(carry);
  return digits;
}

function stocks(prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) if (prices[i - 1] < prices[i]) profit += prices[i] - prices[i - 1];
  return profit;
}

function intersect(nums1, nums2) {
  const frequency = {};
  const intersection = [];
  for (let num of nums1) {
    frequency[num] = (frequency[num] | 0) + 1;
  }
  for (let num of nums2) {
    if (frequency[num] > 0){
      intersection.push(frequency[num]);
      frequency[num]--;
    }
  }
  return intersection;
}
