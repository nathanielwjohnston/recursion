function fibs(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  }
  const fibArray = [0, 1];

  for (let i = 2; i < n; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }

  return fibArray;
}

console.log("Iterative fib - 0:" + fibs(0));
console.log("Iterative fib - 1:" + fibs(1));
console.log("Iterative fib - 2:" + fibs(2));
console.log("Iterative fib - 5:" + fibs(5));
console.log("Iterative fib - 8:" + fibs(8));

function fibsRec(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }
  const array = fibsRec(n - 1);

  array[n - 1] = array[n - 2] + array[n - 3];

  return array;
}

console.log("Recursive fib - 0:" + fibsRec(0));
console.log("Recursive fib - 1:" + fibsRec(1));
console.log("Recursive fib - 2:" + fibsRec(2));
console.log("Recursive fib - 5:" + fibsRec(5));
console.log("Recursive fib - 8:" + fibsRec(8));
