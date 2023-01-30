function mergeSort(array) {
  if (array.length <= 1) return array;

  const middle = Math.floor(array.length / 2);
  const leftSide = array.slice(0, middle);
  const rightSide = array.slice(middle);
  return merge(mergeSort(leftSide), mergeSort(rightSide));
};

function merge(leftArr, rightArr) {
  const mergedArray = [];

  let l = 0;
  let r = 0;

  while (l < leftArr.length && r < rightArr.length) {
    if (leftArr[l] < rightArr[r]) {
      mergedArray.push(leftArr[l]);
      l++;
    } else {
      mergedArray.push(rightArr[r]);
      r++;
    }
  }

  while(l < leftArr.length) {
    mergedArray.push(leftArr[l]);
    l++;
  }
  
  while(r < rightArr.length) {
    mergedArray.push(rightArr[r]);
    r++;
  }

  return mergedArray;
}


console.log(mergeSort([5, 0, 10, -3, -1, 4, 12, -5]));