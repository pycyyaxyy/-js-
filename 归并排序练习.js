//稳定的排序算法，需要额外的O(N)的空间复杂度

function mergeSort(arr, low, high) {
  //如果分解的子序列长度为1，那么已经有序
  if (low >= high) return;

  //从中间划分成两个子序列
  const mid = Math.floor(low, high);

  //对左序列进行递归排序
  mergeSort(arr, low, mid);

  //对右序列进行递归排序
  mergeSort(arr, mid + 1, high);

  //归并
  Merge(arr, low, mid, high);
}

//将前后两个相邻的两个有序表归并成一个有序表
function Merge(A, low, mid, high) {
  //两个有序表A[low,mid] 和A[mid+1,high]

  //1.先复制到辅助数组B中
  const B = [...A];

  //2.每次从对应B中的两个段取出一个记录进行关键字的比较，小的放到A中
  let k = low; //用于记录已经放在A表的哪个位置
  let i = low; //用于记录前一段的元素索引
  let j = mid + 1; //用于记录后一段的元素索引
  for (; i <= mid && j <= high; k++) {
    if (B[i] <= B[j]) {
      A[k] = B[i++];
    } else {
      A[k] = B[j++];
    }
  }

  //3.当数组B中有一段的下标超出其表长（该段的所有元素已经复制到A中），将另一段中的剩余部分直接复制到A中
  while (i <= mid) {
    A[k++] = B[i++];
  }
  while (j <= high) {
    A[k++] = B[j++];
  }
}

// const arr = [1, 231, 23, 123, 4, 12, -12];
const arr = [1, 2, 343, 13213, -1231, 23131];

mergeSort(arr, 0, arr.length - 1);

console.log("排序后:", arr);
