// Genertaor 的特征
// 一: function关键字与函数名之间有一个星号；
// 二: 函数体内部使用yield表达式，定义不同的内部状态。必须调用遍历器对象的next方法，使指针移向下一个状态
{
  let tell = function* () {
    yield 'a';
    yield 'b';
    return 'c'
  };

  let k = tell();

  console.log(k.next()); // {value: "a", done: false}
  console.log(k.next()); // {value: "b", done: false}
  console.log(k.next()); // {value: "c", done: true}
  console.log(k.next()); // {value: undefined, done: true}
}

// Genertaor 与 Iterator 接口的关系
// 由于 Generator 函数就是遍历器生成函数，因此可以把 Generator 赋值给对象的Symbol.iterator属性，从而使得该对象具有 Iterator 接口。
{
  let obj = {};
  obj[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
  }

  for (let value of obj) {
    console.log('value', value); // 1 2 3
  }
}

// Genertaor 状态机
{
  let state = function* () {
    while (1) {
      yield 'A';
      yield 'B';
      yield 'C';
    }
  }
  let status = state();
  console.log(status.next()); // {value: "A", done: false}
  console.log(status.next()); // {value: "B", done: false}
  console.log(status.next()); // {value: "C", done: false}
  console.log(status.next()); // {value: "A", done: false}
  console.log(status.next()); // {value: "B", done: false}
}

// async函数，是一种Generator 函数的语法糖
// async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await
{
  let state=async function (){
    while(1){
      await 'A';
      await 'B';
      await 'C';
    }
  }
  let status=state();
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
}

// Generator 抽奖实例
{
	let draw = function(count) {
		// 抽奖逻辑
		console.log(`剩余${count}次`);
	}
	let residue = function* (count) {
		while(count > 0) {
			count--;
			yield draw(count);
		}
	}
	let start = residue(3);
	let btn = document.createElement('button');
	btn.id = 'startBtn';
	btn.textContent = '抽奖';
	document.body.appendChild(btn);
	document.getElementById('startBtn').addEventListener('click', function(){
		start.next();
	}, false)
}

// Generator 实现长轮询
{
	let ajax = function(){
		yield new Promise(function(resolve, reject){
			// 模拟请求接口
			setTimeout(function(){
				resolve({code:0})
			}, 200);
		})
	}

	let pull = function(){
		let generator = ajax();
		let step = generator.next();
		step.value.then(function(data) {
			if(data.code !=0 ) {
				setTimeout(function(){
					console.log('wait');
					pull();
				}, 1000);
			} else {
				console.log(code)
			}
		})
	}
}