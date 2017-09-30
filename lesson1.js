// let用来声明变量, 但只在let命令所在的代码块内有效
function test() {
  // for(let i=1;i<3;i++){
  //   console.log(i);
  // }
  // console.log(i);
  let a = 1;
}
test();

// const声明一个只读的常量, 一旦声明，常量的值就不能改变。
function last() {
  const PI = 3.1415926;
  const k = {
    a: 1
  }
  k.b = 3;
  console.log(PI, k);
}
last(); // 3.1415926, {a:1,b:3}
