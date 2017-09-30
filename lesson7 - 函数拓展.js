// 函数参数的默认值
{
  function test(x, y = 'world') {
    console.log('默认值', x, y);
  }
  test('hello'); // hello world
  test('hello', 'kill'); // hello kill
}

// 函数作用域
{
  let x = 'test';
  function test2(x, y = x) { // 此处赋值x为第一个参数x的值
    console.log('作用域', x, y);
  }
  test2('kill'); // kill, kill
}

// rest 参数, 用于不确定参数长度时使用, rest参数后不能再添加参数
{
  function test3(...arg) {
    for (let v of arg) {
      console.log('rest', v);
    }
  }
  test3(1, 2, 3, 4, 'a'); // 1 2 3 4 'a'
}

// rest 参数的逆运用
{
  console.log(...[1, 2, 4]); // 1 2 4
  console.log('a', ...[1, 2, 4]); // a 1 2 4
}

// 箭头函数
// 箭头左侧代表参数部分。箭头右侧代表返回值
{
  let arrow = v => v * 2;
  let arrow2 = () => 5;
  console.log('arrow', arrow(3)); // 6
  console.log(arrow2()); // 5

  // arrow 相当于 es5 中
  // var arrow = function(v) {
  //   return v * 2;
  // }
}

// 尾调用指某个函数的最后一步是调用另一个函数。
// 可以提升性能
{
  function tail(x) {
    console.log('tail', x);
  }
  function fx(x) {
    return tail(x)
  }
  fx(123) // tail 123
}
