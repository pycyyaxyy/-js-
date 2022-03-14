//是一种不稳定的排序算法，相当于对冒泡排序的改进，减少了比较次数

const selectSort = (arr) => {
  const n = arr.length;
  //外层循环已然是排序趟数
  for (let i = 0; i < n - 1; i++) {
    //内层循环通过先查找最值，然后只交换一次来减少交换次数
    let minIndex = i; //记录最小元素的位置
    for (let j = i + 1; j < n; j++) {
      //在i+1,n-1中找最小的元素
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  console.log(arr);
  return arr;
};

selectSort([1, 2, 343, 13213, -1231, 23131]);
