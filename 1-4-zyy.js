function a() {
  var name = 'zzz'

  function b() {
    console.log(name)
  }
  b();
}
a();


(function () {
  var a = 123;
  var b = {
    show: function () {
      console.log(a)
    }
  }
  return b
})()



var person = (function () {
  var obj = {}
  obj.setName = function (firstName, lastName) {
    if(firstName.length > 1){
      return
    }
    if(lastName.length > 3){
      return
    }
    obj.firstName = firstName;
    obj.lastName = lastName;
  }
  obj.getName = function () {
    console.log(obj.firstName + obj.lastName)
  }
  return obj
})()