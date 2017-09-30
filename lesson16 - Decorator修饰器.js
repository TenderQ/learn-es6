// Decorator修改类属性的行为
// 修饰器只能用于类和类的方法，不能用于函数，因为存在函数提升
// @readonly 就是一个修饰器, 它修改了Test类属性的行为
{
  // 声明一个Decorator修饰器
  let readonly = function (target, name, descriptor) {
    descriptor.writable = false;
    return descriptor
  };

  class Test {
    @readonly
    time() {
      return '2017-10-01'
    }
  }

  let test = new Test();

  console.log(test.time());

  test.time = function(){
    console.log('reset time'); // 报错, 只读属性不能修改
  };
}

// Decorator修改类的行为
{
  let typename = function (target, name, descriptor) {
    target.myname = 'hello';
  }

  @typename
  class Test {

  }

  console.log('类修饰符', Test.myname);
  // 第三方库修饰器的js库：core-decorators; npm install core-decorators
}

// decorators修饰器 常用于做买点和日志
{
  let log = (type) => {
    return function(target, name, descriptor){
      let src_method = descriptor.value;
      descriptor.value = (...arg) => {
        src_method.apply(target.arg);
        // 买点语句，日志语句
        console.info(`log ${type}`);
      }
    }
  }

  class AD {
    @log('show')
    show() {
      console.log('ad is show');
    }

    @log('click')
    click() {
      console.log('ad is click');
    }
  }

  let ad = new AD();
  ad.show();
  ad.click();
}
