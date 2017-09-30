// Proxy
// Proxy 用于修改某些操作的默认行为
// Proxy 可以理解成:在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
// 实例：var proxy = new Proxy(target, handler);
{
  let obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  };

  let monitor = new Proxy(obj, {
    // 拦截对象属性的读取
    get(target, key) {
      return target[key].replace('2017', '2018')
    },
    // 拦截对象设置属性
    // 只允许修改name的属性值
    set(target, key, value) {
      if (key === 'name') {
        return target[key] = value;
      } else {
        return target[key];
      }
    },
    // 拦截key in object操作
    // 只允许判断name属性
    has(target, key) {
      if (key === 'name') {
        return target[key]
      } else {
        return false;
      }
    },
    // 拦截delete
    // 只允许删除带下划线(_)的属性
    deleteProperty(target, key) {
      if (key.indexOf('_') > -1) {
        delete target[key];
        return true;
      } else {
        return target[key]
      }
    },
    // 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
    // 保护 time 属性值
    ownKeys(target) {
      return Object.keys(target).filter(item => item != 'time')
    }
  });

  console.log('get', monitor.time); // 2018-03-11

  monitor.time = '2018';
  monitor.name = 'node';
  console.log('set', monitor.time, monitor.name); // 2018-03-11 node

  console.log('has', 'name' in monitor, 'time' in monitor); // true false

  delete monitor.time;
  console.log('delete',monitor.time); // 2018-03-11
  
  delete monitor._r;
  console.log('delete',monitor._r); // undefined 

  console.log('ownKeys', Object.keys(monitor)); // "name" "_r" 

}

// Reflect
// Reflect对象与Proxy对象一样, 其静态方法如下：
// Reflect.apply(target,thisArg,args)
// Reflect.construct(target,args)
// Reflect.get(target,name,receiver)
// Reflect.set(target,name,value,receiver)
// Reflect.defineProperty(target,name,desc)
// Reflect.deleteProperty(target,name)
// Reflect.has(target,name)
// Reflect.ownKeys(target)
// Reflect.isExtensible(target)
// Reflect.preventExtensions(target)
// Reflect.getOwnPropertyDescriptor(target, name)
// Reflect.getPrototypeOf(target)
// Reflect.setPrototypeOf(target, prototype)
{
  let obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  };

  console.log('Reflect get', Reflect.get(obj, 'time')); // 2017-03-11
  Reflect.set(obj, 'name', 'node');
  console.log(obj.name); // node
  console.log('has', Reflect.has(obj, 'name')); // true
}

// Proxy和Reflect多用于表单校验
// 实例
{
  function validator(target, validator) {
    return new Proxy(target, {
      _validator: validator,
      set(target, key, value, proxy) {
        if(target.hasOwnProperty(key)) {
          let va = this._validator[key];
          if(!!va(value)) {
            return Reflect.set(target, key, value, proxy);
          } else {
            throw Error(`不能设置${key}为${value}`);
          }
        } else {
          throw Error(`${key} 不存在`)
        }
      }
    });
  }

  const personValidators = {
    name(val) {
      return typeof val === 'string';
    },
    age(val) {
      return typeof val === 'number' && val > 18
    }
  }

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      return validator(this, personValidators);
    }
  }

  const person = new Person('Jack', 30);
  console.log(person);
  person.name = 48; // 报错，不能设置 name 为 48
  person.name = 'Mike';
}