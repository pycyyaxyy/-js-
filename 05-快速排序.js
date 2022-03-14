//快排的思想也是基于分治法的
//在待排序表中选取一个元素作为参考点pivot(通常就取首元素)
//通过一趟排序将待排序表划分为独立的两部分L[1,K-1]和L[K+1,n].
//使得L[1,K-1]中的所有元素小于pivot，L[K+1,n]中的元素大于等于pivot，那么pivot就已经放在了它最终的位置上
//以上称之为一趟快速排序，然后分别递归的对两个子表重复上述过程，直到每部分内只有一个元素或者为空为止，即所有元素都放在了它的最终为止上

//一趟快速排序是一个交替搜索和交换的过程。

function quickSort(A, low, high) {
  //直到每部分内只有一个元素或者为空为止
  if (low >= high) return;

  //将A划分为两个子表,满足左边的都小于pivot，右边的都大于pivot
  const pivotIndex = Partition(A, low, high);
  quickSort(A, low, pivotIndex - 1);
  quickSort(A, pivotIndex + 1, high);
}

//一趟划分
function Partition(A, low, high) {
  //将表的第一个元素作为pivot进行划分
  const pivot = A[low];
  while (low < high) {
    //1.1.先把high向前查找，直到找到第一个比pivot小的元素为止
    while (low < high && A[high] >= pivot) {
      high--;
    }
    //1.2.找到这个比pivot小的元素后，将该元素赋值给low所在的位置
    A[low] = A[high]; //相当于把比pivot小的元素移动到左端

    //2.1.再把low向后查找，直到找到第一个比pivot大或者相等的元素为止
    while (low < high && A[low] < pivot) {
      low++;
    }
    //2.2.然后将这个元素放到high所在的位置
    A[high] = A[low]; //相当于把比pivot大的元素移动到右端
  }

  //最终low===high，而且这个位置就是pivot应该放的位置
  A[low] = pivot;

  //返回最后存放pivot的位置
  return low;
}

// const arr = [1, 231, 23, 123, 4, 12, -12];
const arr = [1, 2, 343, 13213, -1231, 23131];

quickSort(arr, 0, arr.length - 1);

console.log("排序后:", arr);
