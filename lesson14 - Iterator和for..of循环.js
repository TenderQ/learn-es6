// iterator 遍历器的基本用法
{
  let arr = ['hello', 'world'];
  // 默认 Iterator 接口 
  let map = arr[Symbol.iterator]();
  console.log(map.next()); // {value: "hello", done: false}
  console.log(map.next()); // {value: "world", done: false}
  console.log(map.next()); // {value: undefined, done: true}
}

// Symbol.iterator的属性上部署遍历器生成方法
{
  let obj = {
    start: [1, 3, 2],
    end: [7, 9, 8],
    [Symbol.iterator]() {
      let self = this;
      let index = 0;
      let arr = self.start.concat(self.end);
      let len = arr.length;
      return {
        next() {
          if (index < len) {
            return {
              value: arr[index++],
              done: false
            }
          } else {
            return {
              value: arr[index++],
              done: true
            }
          }
        }
      }
    }
  }
  for (let key of obj) {
    console.log(key);
  }
}

// 一个对象如果要具备可被for...of循环调用的 Iterator 接口
// 就必须在Symbol.iterator的属性上部署遍历器生成方法
{
  let arr = ['hello', 'world'];
  for (let value of arr) {
    console.log('value', value);
  }
}
