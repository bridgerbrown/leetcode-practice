/*
#1: Fizz Buzz

Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
*/

var fizzBuzz = function(n){
  let arr = [];
  for (let i = 1; i <= n; i++){
    if (i % 3 == 0 && i % 5 == 0){
      arr.push("FizzBuzz")
    } else if (i % 3 == 0){
        arr.push("Fizz")
    } else if (i % 5 == 0){
      arr.push("Buzz")
    } else {
    arr.push(i.toString());
    }
  }
  return arr
}

/*
This is definitely one of the easiest problems so far. It's really just about knowing how to use the 
'divisible by' operator, then when they fulfill one of the conditionals you push the right word.
*/

/*
#2: Count Primes

Given an integer n, return the number of prime numbers that are strictly less than n.

Example 1:

Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
*/

var countPrimes = function(n){
  let count = 0;
  let primes = [];

  if (n <= 1) return 0;

  for (let i = 2; i < n; i++){
    if(primes[i] == undefined){
      primes[i] = true;
      count++;
      for (let j = 2; j * i < n; j++){
        primes[i*j] = false;
      }
    }      
  }
  return count
}

/*
#3: Power of Three

Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.

 

Example 1:

Input: n = 27
Output: true
Explanation: 27 = 33
*/

var isPowerOfThree = function(n){
  while(n > 1){
    n /= 3
  }
  return n === 1
}

/*
I discovered the '=/' operator from this one, and I found this solution to be really clever.
You keep dividing and assigning it to n until it's less than or equal to 1, and if it equals 1 
in the end, it is a power of three.
*/

/*
#4: Roman to Integer

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.


Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
*/

var romanToInt = function(s){
  let obj = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10, 
    V: 5,
    I: 1  
  }
  let total = 0;
  for (let i = 0; i < s.length; i++){
    if(obj[s[i]] < obj[s[i+1]]){
      total -= obj[s[i]]
    } else {
      total += obj[s[i]];
    }
  }
  return total
}
