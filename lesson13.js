// Promise 是异步编程的一种解决方案
// 传统解决异步编程的方式（回调）
{
  let ajax = function (callback) {
    console.log('执行');
    setTimeout(function () {
      callback && callback.call()
    }, 1000);
  };
  ajax(function () {
    console.log('callback');
  })
}

// 使用Promise进行异步编程
{
  let ajax = function () {
    console.log('执行2');
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve()
      }, 1000);
    })
  };

  ajax().then(function () {
    console.log('promise');
  })
}

// 串联Promise
{
  let ajax = function () {
    console.log('执行3');
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve()
      }, 1000);
    })
  };

  ajax().then(function () {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve()
        }, 2000);
      });
    })
    .then(function () {
      console.log('promise2');
    })
}

// 捕获Promise错误
{
  let ajax = function (num) {
    console.log('执行4');
    return new Promise(function (resolve, reject) {
      if (num > 5) {
        resolve(num)
      } else {
        throw new Error('出错了')
      }
    })
  }

  ajax(6).then(function (num) {
    console.log('log', num);
  }).catch(function (err) {
    console.log('catch', err);
  });

  ajax(3).then(function (num) {
    console.log('log', num);
  }).catch(function (err) {
    console.log('catch', err);
  });
}

// 实例
{
  // 图片加载完后再加载到页面
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img');
      img.src = src;
      img.onload = function() {
        resolve(img);
      }
      img.onerror = function(err) {
        reject(err);
      }
    })
  }
  function showImgs(imgs) {
    imgs.forEach(function(img){
      document.body.appendChild(img)
    })
  }
  function showImg(img) {
    let p = document.createElement('p');
    p.appendChild(img);
    document.body.appendChild(p); 
  }

  // all() 把多个Promise实例包装为一个实例执行，当所有Promise实例状态都发生变化时，才会触发处理
  // 只要有一个实例被rejected，就会调用Promise.all方法后面的回调函数。
  Promise.all([
    loadImg('https://img6.bdstatic.com/img/image/smallpic/weijuchiluntu.jpg'),
    loadImg('https://img6.bdstatic.com/img/image/smallpic/touxixiaoqinx.jpg'),
    loadImg('https://img6.bdstatic.com/img/image/public/bizhi112.png')
  ]).then(showImgs);

  // race() 同样是将多个Promise实例，包装成一个新的Promise实例
  // 但是多个实例中有一个实例率先改变状态， 该实例的返回值就会传递给 race 方法后面的回调函数
  Promise.race([
    loadImg('https://img6.bdstatic.com/img/image/smallpic/weijuchiluntu.jpg'),
    loadImg('https://img6.bdstatic.com/img/image/smallpic/touxixiaoqinx.jpg'),
    loadImg('https://img6.bdstatic.com/img/image/public/bizhi112.png')
  ]).then(showImg);
}