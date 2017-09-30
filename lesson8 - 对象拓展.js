// 简洁表示法
{
   // 属性简写
  let o = 1;
  let k = 2;
  let es5 = {
    o: o,
    k: k
  };
  let es6 = {
    o,
    k
  };
  console.log(es5, es6); // {o:1, k:2}

  // 方法简写
  let es5_method = {
    hello: function () {
      console.log('hello');
    }
  };
  let es6_method = {
    hello() {
      console.log('hello');
    }
  };
  console.log(es5_method.hello(), es6_method.hello()); // hello
}

// 属性表达式
// ES6 允许定义对象属性名时，把表达式放在方括号内。
{
  let a = 'b';
  let es5_obj = {
    a: 'c',
    b: 'c'
  };

  let es6_obj = {
    [a]: 'c' // [a]作为一个表达式
  }

  console.log(es5_obj, es6_obj); // {a: "c", b: "c"}, {b: "c"}

}

// 新增API
// Object.is(): 比较两个值是否严格相等,与（===）的行为基本一致。
// Object.assign(target, source): 用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
{
  console.log('字符串', Object.is('abc', 'abc'), 'abc' === 'abc'); // true
  console.log('数组', Object.is([], []), [] === []); // false

  console.log('拷贝', Object.assign({ a: 'a' }, { b: 'b' })); // {a: "a", b: "b"}
}

// Object.entries(): 返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历属性的键值对数组。
{
  let test = { k: 123, o: 456 };
  for (let [key, value] of Object.entries(test)) {
    console.log([key, value]);  // ["k", 123] ["o", 456]
  }
}

// 扩展运算符, 支持性不好
{
  let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:'ccc'};
  c={
    c:'ddd',
    d:'ccc'
  }
}
