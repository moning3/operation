//charCodeAt 的返回值是什么？
//返回0到65535之间的整数，表示给定索引处的UTF-16代码单元
//(在 Unicode 编码单元表示一个单一的 UTF-16 编码单元的情况下，
//UTF-16 编码单元匹配 Unicode 编码单元。

// 使用`indexOf`找出 arr1 和 arr2的交集，结果使用数组表示。
var arr1 = [1, 2, 3, 4, 5]
var arr2 = [2, 4, 6]
var arr3 = []

function arrCoincide(arr1, arr2) {
  for (var i = 0; i < arr1.length; i += 1) {
    if (arr2.indexOf(arr1[i]) === 0) {
      arr3.push(arr1[i])
    }
  }
}
if (arr1.length > arr2.length) {
  arrCoincide(arr1, arr2)
} else {
  arrCoincide(arr2, arr1)
}

console.log(arr3)

// 使用正则表达式找出string这个变量的后缀名即'exe'
var string = 'test.exe'
var reg = /\.[^\.]+$/
var exe = reg.exec(string);
console.log(exe[0])

// 解码以下url，找出搜索关键字。
var url = 'https://www.google.com/search?safe=active&source=hp&ei=3x6VWuHCDKfU0gKc1ISQDw&q=%E8%BF%99%E6%98%AF%E4%B8%80%E6%AE%B5%E6%B5%8B%E8%AF%95%E6%96%87%E6%9C%AC&oq=%E8%BF%99%E6%98%AF%E4%B8%80%E6%AE%B5%E6%B5%8B%E8%AF%95%E6%96%87%E6%9C%AC'
// 正则还不会浪
var regex = /q=/
var urlC = decodeURI(url)
var b = urlC.search(regex) + 2
var c = urlC.substr(b)
console.log(c)