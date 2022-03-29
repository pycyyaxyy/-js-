//快排是不稳定的
function quickSort(arr, low, high) {
  if (low >= high) return;

  const pivotIndex = Partition(arr, low, high);
  quickSort(arr, low, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, high);
}

function Partition(arr, low, high) {
  const pivot = arr[low];

  while (low < high) {
    //先把high指针一直往左查找，直到找到第一个小于pivot的值的时候就交换位置
    while (low < high && arr[high] >= pivot) {
      high--;
    }
    arr[low] = arr[high];

    //再把low指针一直向右查找，知道找到第一个大于pivot的值的时候就交换位置
    while (low < high && arr[low] < pivot) {
      low++;
    }
    arr[high] = arr[low];
  }

  //最终low===high，也就是pivot应该放的位置
  arr[low] = pivot;
  return low;
}

// const arr = [1, 231, 23, 123, 4, 12, -12];
const arr = [1, 2, 343, 13213, -1231, 23131];

quickSort(arr, 0, arr.length - 1);

console.log("排序后:", arr);
