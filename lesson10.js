// Set
// set 类似于数组，但是成员的值都是唯一的，没有重复的值。
// add() 方法可以为 set 数据结构添加数据
// 取set 数据结构长度用 size 属性
{
  let list = new Set();
  list.add(5);
  list.add(7);

  console.log('size', list.size); // 2
}
// new Set(Array) 方法可以将一个数组转换为 set 结构
{
  let arr = [1, 2, 3, 4, 5];
  let list = new Set(arr);

  console.log('size', list.size); // 5
}
// set 结构中添加重复元素时不生效， 所以 set 多用于可以去重
// set 在数据比较时不做数据类型转换
{
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1); // 不会报错，也不会生效

  console.log('list', list); // Set(1,2)

  let arr = [1, 2, 3, 1, '2'];
  let list2 = new Set(arr);

  console.log('unique', list2); // Set(1,2,3, '2')
}
// has() 判断set结构中是否含有某个值
// delete() 删除set结构中的某个值
// clear() 清空set数据结构
{
  let arr = ['add', 'delete', 'clear', 'has'];
  let list = new Set(arr);

  console.log('has', list.has('add')); // true
  console.log('delete', list.delete('add'), list);
  list.clear();
  console.log('list', list); // Set()
}

// Set 遍历操作
// keys()：返回键名的遍历器
// values()：返回键值的遍历器
// entries()：返回键值对的遍历器
// forEach()：使用回调函数遍历每个成员
{
  let arr = ['add', 'delete', 'clear', 'has'];
  let list = new Set(arr);

  for (let key of list.keys()) {
    console.log('keys', key); // add delete clear has
  }
  // 由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致。
  for (let value of list.values()) {
    console.log('value', value); // add delete clear has
  }
  for (let [key, value] of list.entries()) {
    console.log('entries', key, value); // add add delete delete clear clear has has
  }

  list.forEach(function (item) { console.log(item); }) // add delete clear has
}

// WeakSet
// 区别：(1) WeakSet 的成员只能是对象，而不能是其他类型的值。
//       (2) WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用
//       (3) WeakSet 不能遍历， 且没有size 属性, clear() 方法
{
  let weakList = new WeakSet();

  let arg = {};

  weakList.add(arg);
  // weakList.add(2); // 保错

  console.log('weakList', weakList);
}

// Map
// Map 添加元素使用 set() 方法
// Map 获取key对应的键值使用 get() 方法
{
  let map = new Map();
  let arr = ['123'];

  map.set(arr, 456);

  console.log('map', map, map.get(arr)); // Map{['123'] => 456} 456
}
// Map 的构造方法，接受数组作为参数
// has(): 返回一个布尔值，表示某个键是否在当前 Map 对象之中
// delete(): 删除某个键，返回true。如果删除失败，返回false。
// clear(): 清除所有成员，没有返回值
// Map 的遍历方法跟 Set 一样
{
  let map = new Map([['a', 123], ['b', 456]]);
  console.log('map args', map);  // Map{['a'] => 123, ['b'] => 456}
  console.log('size', map.size); // 2
  console.log('delete', map.delete('a'), map); // true
  console.log('clear', map.clear(), map);
}

// WeakMap
// WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名
// WeakMap的键名所指向的对象，不计入垃圾回收机制。
// WeakMap不能遍历， 且没有size 属性, clear() 方法
{
  let weakmap = new WeakMap();

  let o = {};
  weakmap.set(o, 123);
  console.log(weakmap.get(o));
}
