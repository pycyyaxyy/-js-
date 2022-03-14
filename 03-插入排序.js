//相当于插牌，左边是已经排好的，把右边的牌往左边插

const insertSort = (arr) => {
  const n = arr.length;
  //i代表选择的牌，往前面已经排序好的序列插牌
  for (let i = 1; i < n; i++) {
    let curIndex = i;
    //当已选择的牌左边的牌比他大就交换，一直到整幅牌的最左边那张牌
    while (arr[curIndex - 1] > arr[curIndex] && curIndex - 1 >= 0) {
      [arr[curIndex], arr[curIndex - 1]] = [arr[curIndex - 1], arr[curIndex]];
      curIndex--;
    }
  }
  console.log(arr);
  // console.log(arr.length);

  return arr;
};
insertSort([1, 231, 23, 123, 4, 12, -12]);
