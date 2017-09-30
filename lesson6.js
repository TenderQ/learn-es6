// Array.of(): 将一组值，转换为数组。
{
  let arr = Array.of(3, 4, 7, 9, 11);
  console.log('arr=', arr); // [3,4,7,9,11]

  let empty = Array.of();
  console.log('empty', empty); // []
}

// Array.from(): 将数组的空位，转为undefined，也就是说，这个方法不会忽略空位。
{
  console.log(Array.from(['a', , 'b'])); // ['a', undefined, 'b']
  console.log(Array.from([1, 3, 5], function (item) { return item * 2 })); // [2,6,10]
}

// fill方法使用给定值，填充一个数组。
// fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
{
  console.log('fill-7', [1, 'a', undefined].fill(7)); // [7,7,7]
  console.log('fill,pos', ['a', 'b', 'c'].fill(7, 1, 3)); // ['a',7,7]
}

// entries()，keys()和values()——用于遍历数组,可以用for...of循环进行遍历
// 区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
{
  for (let index of ['1', 'c', 'ks'].keys()) {
    console.log('keys', index); // 0, 1, 2
  }
  for (let value of ['1', 'c', 'ks'].values()) {
    console.log('values', value); // '1', 'c', 'ks'
  }
  for (let [index, value] of ['1', 'c', 'ks'].entries()) {
    console.log('values', index, value); // 0 '1', 1 'c', 2, 'ks'
  }
}

// copyWithin(): 在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。
// copyWithin(target, start = 0, end = this.length)
{
  console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4)); // [4, 2, 3, 4, 5]
}

// find(): 用于找出第一个符合条件的数组成员
// findIndex(): 返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
{
  console.log([1, 2, 3, 4, 5, 6].find(function (item) { return item > 3 })); // 4
  console.log([1, 2, 3, 4, 5, 6].findIndex(function (item) { return item > 3 })); // 3
}

// includes(): 判断某个数组是否包含给定的值，
{
  console.log('number', [1, 2, NaN].includes(1)); // true
  console.log('number', [1, 2, NaN].includes(NaN)); // true
}
