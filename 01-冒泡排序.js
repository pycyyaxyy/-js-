const bubbleSort = (arr) => {
  const n = arr.length;

  //外层循环次数排序的趟数，最后一趟不用再排序了，因为已经有序
  for (let i = 0; i < n - 1; i++) {
    //内存循环次数为每趟循环的比较次数，为n-i-1次
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log(arr);
  return arr;
};

bubbleSort([4, 3, 1, 2]);
