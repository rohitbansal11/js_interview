var fib = function(n) {
  if (n === 1) {
    return [0, 1];
  } else {
    var arr = fib(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
};

console.log(fib(12));

//for series less than 100  pass argument 11
//for series less than 50  pass argument 9
//for series less than 150  pass argument 12
