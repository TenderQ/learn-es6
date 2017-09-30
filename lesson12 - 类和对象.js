// 类的基本定义和生成实例(constructor)
{
  class Parent {
    constructor(name = 'stuff') {
      this.name = name;
    }
  }
  let v_parent = new Parent('v');
  console.log('构造函数和实例', v_parent);
}

// 类的继承(extends)
{
  class Parent {
    constructor(name = 'stuff') {
      this.name = name;
    }
  }

  class Child extends Parent {

  }

  console.log('继承', new Child());
}

// 继承传递参数(super)
{
  class Parent {
    constructor(name = 'stuff') {
      this.name = name;
    }
  }

  class Child extends Parent {
    constructor(name = 'child') {
      super(name); // super 一定放在第一行
      this.age = 18;
    }
  }

  console.log('继承传递参数', new Child('hello'));
}

// getter,setter
{
  class Parent {
    constructor(name = 'stuff') {
      this.name = name;
    }

    // getter 的写法
    get longName() {
      return 'Tom ' + this.name
    }
    // setter 的写法
    set longName(value) {
      this.name = value;
    }
  }

  let v = new Parent();
  console.log('getter:', v.longName); // Tom stuff
  v.longName = 'hello';
  console.log('setter:', v.longName); // Tom hello
}

// 静态方法(static)
// 只能通过类去调用，而不能通过类的实例调用
{
  class Parent {
    constructor(name = 'stuff') {
      this.name = name;
    }

    static tell() {
      console.log('tell');
    }
  }

  Parent.tell(); // tell
}

// 静态属性
{
  class Parent {
    constructor(name = 'stuff') {
      this.name = name;
    }
  }

  Parent.type = 'test'; // 定义静态属性

  console.log('静态属性', Parent.type); // test
}
