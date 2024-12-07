function fibs(n) {
  const fibArray = [0, 1];

  for (let i = 2; i < n; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }

  return fibArray;
}

// Above breaks if you put in an n of, say, 1

function fibsRec(n) {
  console.log("test");
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
