function mergeSort(array) {
  // Base case
  if (array.length === 1) {
    return array;
  }

  function merge(leftArray, rightArray) {
    const sortedArray = [];
    let currentRightElement = 0;
    for (const [i, leftElement] of leftArray.entries()) {
      for (let j = currentRightElement; j < rightArray.length; j++) {
        if (leftElement < rightArray[j]) {
          sortedArray.push(leftElement);
          if (i === leftArray.length - 1) {
            // last left element, therefore push all right
            return sortedArray.concat(rightArray.slice(j));
          }
          currentRightElement = j;
          break;
        } else {
          sortedArray.push(rightArray[j]);
          if (j === rightArray.length - 1) {
            // last right element, therefore push all left
            const test = sortedArray.concat(leftArray.slice(i));
            return sortedArray.concat(leftArray.slice(i));
          }
        }
      }
    }
  }

  const length = array.length;
  const midPoint = Math.floor((length - 1) / 2);
  const leftArray = mergeSort(array.slice(0, midPoint + 1));
  const rightArray = mergeSort(array.slice(midPoint + 1));
  const sortedArray = merge(leftArray, rightArray);
  return sortedArray;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
