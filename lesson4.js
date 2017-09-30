// 字符的 Unicode 表示法
{
  console.log('a', `\u0061`); // a a
  console.log('s', `\u20BB7`); // 超过了0xFFFF,前四位(20BB)为两个字节，7为两个字节

  console.log('s', `\u{20BB7}`); // s 𠮷
}

// charCodeAt(): 返回指定位置的字符的 Unicode 编码
// codePointAt(): 正确处理4个字节储存的字符，返回一个字符的码点。
{
  let s = '𠮷';
  console.log('length', s.length); // 2
  console.log('0', s.charAt(0)); // 取字符方法，charAt方法无法读取整个字符
  console.log('1', s.charAt(1));
  console.log('at0', s.charCodeAt(0)); // 55362
  console.log('at1', s.charCodeAt(1)); // 57271

  let s1 = '𠮷a';
  console.log('length', s1.length); // 3
  console.log('code0', s1.codePointAt(0)); // 134071
  console.log('code0', s1.codePointAt(0).toString(16)); // 20bb7
  console.log('code1', s1.codePointAt(1)); // 57271
  console.log('code2', s1.codePointAt(2)); // 97
}

// fromCharCode(): 用于从码点返回对应字符,不能识别32位的UTF-16字符(Unicode编号大于0xFFFF)
// fromCodePoint(): 可以识别大于0xFFFF的字符, 作用与codePointAt方法相反。
{
  console.log(String.fromCharCode("0x20bb7")); // 乱码
  console.log(String.fromCodePoint("0x20bb7")); // 𠮷
}

// 字符串的遍历器接口 for...of
{
  let str = '\u{20bb7}abc';
  for (let i = 0; i < str.length; i++) {
    console.log('es5', str[i]); // 乱码 a b c
  }
  for (let code of str) {
    console.log('es6', code); // 𠮷 a b c
  }
}

// includes()：是否找到了参数字符串。
// startsWith()：判断参数字符串是否在原字符串的头部。
// endsWith()：判断参数字符串是否在原字符串的尾部。
{
  let str = "string";
  console.log('includes', str.includes("c")); // false
  console.log('start', str.startsWith('str')); // true
  console.log('end', str.endsWith('ng')); // true
}

// repeat(): 返回一个新字符串，表示将原字符串重复n次。
{
  let str = "abc";
  console.log(str.repeat(2));
}

// 模板字符串
// 用反引号（`）标识, 模板字符串中嵌入变量，需要将变量名写在${}之中
{
  let name = "list";
  let info = "hello world";
  let m = `i am ${name},${info}`;
  console.log(m); // i am list, hello world
}

// padStart(): 用于头部补全, 第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串。
// padEnd(): 用于尾部补全。如果省略第二个参数，默认使用空格补全长度。
{
  console.log('1'.padStart(2, '0')); // 01
  console.log('1'.padEnd(2, '0')); // 10
}

// 标签模板
// 使用场景： (1)过滤html字符串，防止xss攻击
// (2)多语言处理
{
  let user = {
    name: 'list',
    info: 'hello world'
  };
  console.log(abc`i am ${user.name},${user.info}`); // i am ,,,listhello world
  function abc(s, v1, v2) {
    console.log(s, v1, v2); // ["i am ", ",", ""] "list" "hello world"
    return s + v1 + v2；
  }
}

// String.raw用来充当模板字符串的处理函数
// 返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，对应于替换变量后的模板字符串
{
  console.log(String.raw`Hi\n${1 + 2}`); // Hi\n3
  console.log(`Hi\n${1 + 2}`); // Hi (换行) 3
}
