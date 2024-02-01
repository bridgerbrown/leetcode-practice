/*
#1: Evaluate Reverse Polish Notation

You are given an array of strings tokens that represents an arithmetic expression 
in a Reverse Polish Notation.
Evaluate the expression. Return an integer that represents the value of the expression.

Note that:
The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.

Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
*/

// Reverse Polish Notation is just postfix notation, where operators follow their operands:
// 3 4 + for 3 + 4

function evalRPN(tokens) {
  let stack = [];
  let ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b),
  };
  for (let t of tokens) {
    if (ops[t]) {
      let top = stack.pop();
      let second = stack.pop();
      stack.push(ops[t](second, top));
    } else {
      stack.push(Number(t));
    }
  }
  return stack.pop();
}

/*
#2: Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
*/

var generateParenthesis = (n) => dfs(n);

const dfs = (n, combos = [], open = 0, close = 0, path = []) => {
    const isBaseCase = (path.length === (n * 2));
    if (isBaseCase) {
        combos.push(path.join(''));

        return combos; 
    }

    const isOpen = open < n;
    if (isOpen) backTrackOpen(n, combos, open, close, path);

    const isClose = close < open;
    if (isClose) backTrackClose(n, combos, open, close, path);

    return combos;
}

const backTrackOpen = (n, combos, open, close, path) => {
    path.push('('); 
        dfs(n, combos, (open + 1), close, path);
    path.pop();
}

const backTrackClose = (n, combos, open, close, path) => {
    path.push(')');
        dfs(n, combos, open, (close + 1), path);
    path.pop();
}
// Time O(2^N) | Space O(2^N)

/*
#3: Daily Temperatures

Given an array of integers temperatures represents the daily temperatures, 
return an array answer such that answer[i] is the number of days you have to wait after 
the ith day to get a warmer temperature. If there is no future day for which this is 
possible, keep answer[i] == 0 instead.

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
*/

function dailyTemperatures(temps, stack = []) { // stack is in decreasing order (non increasing)
  const days = Array(temps.length).fill(0);

  for (let day = 0; day < temps.length; day++) {
    while (canShrink(stack, temps, day)) {
      const prevColdDay = stack.pop();
      const daysToWait = (day - prevColdDay);
      days[prevColdDay] = daysToWait;
    } 
    stack.push(day);
  }
  return days;
}
const canShrink = (stack, temps, day) => {
  const prevDay = stack[stack.length - 1];
  const [prevTemp, currTemp] = [temps[prevDay], temps[day]];
  const isWarmer = prevTemp < currTemp;
  return stack.length && isWarmer;
}
