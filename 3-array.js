var a = [1, 2, 3];
var b = new Array(1, 2, 3);

var c = [
  [1, 2, 3, 4],
  [1, 2, 3]
]

function ewArr() {
  var newStr = ''
  for (var i = 0; i < c.length; i += 1) {
    newStr += i + ':' + c[i].join();
    newStr += ';'
  }
  console.log(newStr)
}
ewArr()

// 创建函数，可以同时添加到数组的前面和后面，复制一遍数组，并且合并
var d = [1, 2, 3, 4]

function editArr(int) {
  d.push(int);
  d.unshift(int);
  d = d.concat(d.slice())
}
editArr(1);

//  每次下标为偶数的时候，元素乘以2；
var f = [1, 2, 3, 4, 5, 6];
var aaa = f.map(function (val, index) {
  if (index % 2 === 0) {
    val *= 2
  }
  return val;
})

for (var i = 0; i < f.length; i += 1) {
  if (i % 2 === 0) {
    f[i] *= 2
  }
}


// 将数组里面的数字找出
var g = ['a', 1, 2, { a: 3 }, 3, 4, 1.2];
var resultInt = 0;
g.reduce(function (sum, val) {
  if (isNaN(val) === false) {
    sum += val
  }
  return sum
}, 0)
for (var i = 0; i < g.length; i += 1) {
  if (isNaN(g[i]) === false) {
    resultInt += g[i]
  }
}
console.log(resultInt)

// 调用函数 让数组，随机顺序
var h = [1, 2, 3, 4];
function random(a, b) {
  return Math.random() > 0.5 ? -1 : 1
}
h.sort(random);
