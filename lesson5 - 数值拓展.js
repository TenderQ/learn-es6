// 二进制(0B)和八进制(0o)表示法
{
  console.log('B', 0B111110111); // B 503
  console.log(0o767); // 503
}

// Number.isFinite(): 判断一个数值是否为有限的
// Number.isNaN(): 判断一个值是否为NaN
{
  console.log('15', Number.isFinite(15)); // true
  console.log('NaN', Number.isFinite(NaN)); // false
  console.log('1/0', Number.isFinite('true' / 0)); // false
  console.log('NaN', Number.isNaN(NaN)); // true
  console.log('0', Number.isNaN(0)); // false

}

// Number.isInteger(): 判断一个值是否为整数。
{
  console.log('25', Number.isInteger(25)); // true
  console.log('25.0', Number.isInteger(25.0)); // true
  console.log('25.1', Number.isInteger(25.1)); // false
  console.log('25', Number.isInteger('25')); // false
  console.log('true', Number.isInteger(true)); // false
}

// Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER两个常量，用来表示数值范围的上下限（-2^53, 2^53）
// Number.isSafeInteger(): 判断一个整数是否落在安全范围之内。
{
  console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
  console.log('10', Number.isSafeInteger(10)); // true
  console.log('a', Number.isSafeInteger('a')); // false
  console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1)) // false
}

// Math.trunc(): 用于去除一个数的小数部分，返回整数部分
{
  console.log(4.1, Math.trunc(4.1)); // 4
  console.log(4.9, Math.trunc(4.9)); // 4
  console.log(-4.1, Math.trunc(-4.1)) // -4
  console.log(-4.9, Math.trunc(-4.9)) // -4
  console.log(-0.1234, Math.trunc(-0.1234)) // -0
}

// Math.sign(): 判断一个数到正数、负数、还是零。
// 对于非数值，会先将其转换为数值。
{
  console.log('-5', Math.sign(-5)); // -1
  console.log('0', Math.sign(0)); // 0
  console.log('-0', Math.sign(-0)); // -0
  console.log('5', Math.sign(5)); // 1
  console.log('50', Math.sign('50')); // 1
  console.log('foo', Math.sign('foo')); // NaN
}

// Math.cbrt() 计算一个数的立方根。
{
  console.log('-1', Math.cbrt(-1)); // -1
  console.log('8', Math.cbrt(8)); // 2
}
