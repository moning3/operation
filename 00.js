// 1
'1020'
// 完善代码，使代码可以正常运行。

function add(a){
  return function(b){
    return a+b
  }
}
add(2, 5);
add(2)(5);

// 3 
"i'm a lasagna hog".split("").reverse().join("");
console.log("goh angasal a m'i")

// 4 按顺序写出两个alert的结果。
var foo = "Hello";
(function () {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
console.log('Hello World')
console.log('Hello')

// 5：foo.x的值是？
var foo = {
  n: 1
};
var bar = foo; // { n: 1}
foo.x = foo = {
  n: 2
}; // foo:{ n: 2}
console.log('x的值：undefined')

// 6 写出下列代码打印的结果。

console.log('one');
setTimeout(function () {
  console.log('two');
}, 0);
console.log('three');

console.log('结果： one，three，two')

// 7 指出下列4个promise的不同。

// 直接返回并且执行 doSomethingElse函数
doSomething().then(function () {
  return doSomethingElse();
});

// 剩下我不会
doSomething().then(function () {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);



function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

Person.prototype.greeting = function() {
  alert('Hi! I\'m ' + this.name.first + '.');
};

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.greeting = function() {
  var prefix;

  if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    prefix = 'Mr.';
  } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    prefix = 'Mrs.';
  } else {
    prefix = 'Mx.';
  }

  alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
};