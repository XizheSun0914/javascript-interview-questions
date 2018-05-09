// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(5) === 5

//a naive recursive approach
//runtime: exponential
function fibonacci1(n) {
  return n < 2 ? n : fibonacci1(n - 1) + fibonacci1(n - 2);
}

//a iterative solution
//runtime: linear
function fibonacci2(n) {
  let fib = [0,1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i-2] + fib[i-1];
  }
  return fib;
}

//a iterative solution with closure and IIFE
//runtime: linear
var Fibonaccis3 = (function () {
  var fib = [0, 1];
  return function (n) {
    if (typeof fib[n] !== 'number') {
      fib[n] = fib[n - 1] + fib[n - 2];
    }
    return fib[n];
  };
}());

//a recursive approach with memoization
//runtime: linear
function fibonacci4 (n,memo={}) {
  if (memo[n]) return memo[n];
  if (n<2) return n;
  return memo[n]=fibonacci2(n-1,memo)+fibonacci2(n-2,memo);
}

//a bottom-up iterative approach
//runtime: linear
function fibonacci5 (n){
  const arr = [0,1];
  if (n<2) return arr.slice(0,n+1);
  for (let i = 2; i <= n; i++) {
    const a = arr[i-1]
    const b = arr[i-2]
    arr.push(a+b);
  }
  return arr[n]
}

//another recursive approach with memoization but better
//runtime: linear for the first time running the fib algorithm with the memoized function
//Any subsequent calculation where 'n' is less than the earlier call's value of 'n' would be constant runtime.
function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);
