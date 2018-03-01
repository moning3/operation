try {
  throw '抛出异常'
} catch (e) {
  console.log('进入catch')
} finally {
  console.log('异常结束')
}


// 为什么需要在第二行写一个if
for (var prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}

var arr = [1, 2, 3, 4, 5];
var a = arr.reduce((total, value) =>  `${total}，${value}` )
console.log(a)