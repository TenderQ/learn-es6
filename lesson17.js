// 模块引入: import {Module} from 'PATH'
// 模块导出: export

// 导出变量
export let A = 123;

// 导出函数
export function test() {
  console.log('test');
}

// 导出类
export class Hello {
  test() {
    console.log('class');
  }
}

// 导入
import {A, test, Hellp} from 'PATH';
import * as lesson from 'PATH';
consolelog(lesson.A, lesson.test);

// export default命令，为模块指定默认输出。
let A = 123;
let test = function () {
  console.log('test');
}
class Hello {
  test() {
    console.log('class');
  }
}

export default {
  A,
  test,
  Hello
}

// 这时就不需要知道原模块输出的函数名。
// 需要注意的是，这时import命令后面，不使用大括号。
import customName from 'PATH'; // customName为用户自定义的名字
consolelog(customName.A, customName.test);