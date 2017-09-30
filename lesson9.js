// Symbol，表示独一无二的值
// 它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。
// Symbol 值通过Symbol函数生成, Symbol函数前不能使用new命令
{
  // 声明
  let a1 = Symbol();
  let a2 = Symbol();
  console.log(a1 === a2); // false
  let a3 = Symbol.for('a3'); // Symbol(a3)
  let a4 = Symbol.for('a3');
  console.log(a3===a4); // true

{
  let a1 = Symbol.for('abc');
  let obj = {
    [a1]: '123',
    'abc': 345,
    'c': 456
  };
  console.log('obj', obj); // {abc: 345, c: 456, Symbol(abc): "123"}

  // for...of 方法拿不到 Symbol的 key值
  for (let [key, value] of Object.entries(obj)) {
    console.log('let of', key, value); // abc 345, c 456
  }

  Object.getOwnPropertySymbols(obj).forEach(function (item) {
    console.log(obj[item]); // 123
  })

  Reflect.ownKeys(obj).forEach(function (item) {
    console.log('ownkeys', item, obj[item]); // abc 345, c 456, Symbol(abc) 123
  })
}
