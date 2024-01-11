function countPrimes(n) {
  const count = 0;
  const primes = []; 
  if (n <= 1) return 0;
  for (let i = 2; i < n; i++) {
    if (primes[i] == undefined) {
      primes[i] = true;
      count++;
      for (let j = 2; j * i < n; j++) {
        primes[i * j] = false;
      }
    }    
  }
  return count;
}

var Solution = function(nums) {
  this.nums = nums;
}
Solution.prototype.reset = function() {
  return this.nums;
}
Solution.prototype.shuffle = function() {
  const shuffled = this.nums.slice();
  const shuffle = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  for (let i = 0; i < shuffled.length; i++) {
    shuffle(shuffled, i, Math.floor(Math.random() * n));
  }
  return shuffled;
}

function missingNumber(nums) {
  let total = 0, sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    total += i + 1;
  };
  return total - sum;
}

function pascalsTriangle(rows) {
  if (!rows || rows <= 0) return [];
  const pascal = [[1]];
  for (let i = 1; i < rows; i++) {
    const prev = pascal[pascal.length - 1];
    const shiftL = [...prev, 0];
    const shiftR = [0, ...prev];
    const curr = shiftL.map((r, i) => r + shiftR[i]);
    pascal.push(curr);
  }
  return pascal;
}

function BTLevels(root) {
  const results = [];
  if (!root) return results;
  function DFS(node, level) {
    results[level] = [...(results[level] || []), node.val];
    if (node.left) DFS(node.left, level + 1);
    if (node.right) DFS(node.right, level + 1);
  }
  DFS(root, 0)
  return results;
}

function atoi(s) {
  return Math.max(-(2 ** 31), Math.min(2 ** 31 - 1, parseInt(s) || 0));
}

function romanToInt(s) {
  const chars = {...};
  const count = 0;
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] < obj[s[i + 1]]) {
      total -= obj[s[i]];
    } else {
      total += obj[s[i]];
    }
  }
  return total;
}

function deleteNodeLL(head, node) {
  let temp = node.next;
  node.val = temp.val;
  node.next = temp.next;
}

function rotateMatrix(matrix) {
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 1; j < matrix.length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix[0].length - j - 1];
      matrix[i][matrix[0].length - j - 1] = temp;
    }
  }
}

function llCyclic(head, pos) {
  let fast = head;
  while (fast && fast.next) {
    head = head.next;
    fast = fast.next.next;
    if (head == fast) return true
  }
  return false;
}

function reverseBits(n) {
  let result = 0;
  let count = 32;
  while (count--) {
    result *= 2;
    result += n & 1;
    n = n >> 1;
  }
  return result
}

function symmetricTree(root) {
  if (!root) return true;
  const DFS = (left, right) => {
    if (!left && !right) return true
    if (left && !right || !left && right || left.val !== right.val) return false;
    DFS(left.right, right.left) && DFS (left.left, right.right);
  }
  DFS(root.left, root.right);
}

function validSudoku(board) {
  const set = new Set();
  for (let i = 0; i  < board.length; i ++) {
    for (let j = 0; j < board[0].length; j++) {
      const value = board[i][j];
      if (value !== ".") {
        const row = `${value} at row ${i}`;
        const col = `${value} at col ${j}`;
        const box = `${value} at box ${Math.floor(i / 3)}, ${Math.floor(j / 3)}`

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

function countPrimes(n) {
  const count = 0;
  const primes = [];
  if (n <= 1) return 0;
  for (let i = 2; i < n; i++) {
    if (primes[i] === undefined) {
      primes[i] = true;
      count++;
      for (let j = 2; j * i < n; j++) {
        primes[j * i] = false;
      }
    }
  }
  return count;
}

function atoi(s) {
  return Math.max(-(2 ** 31), Math.min(2 ** 31 - 1, parseInt(s) || 0));
}
