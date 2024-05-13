var fn;
function foo() {
  var a = 2;
  function baz() {
    console.log(a);
  }
  fn = baz;
}
function bar() {
  fn();
}
foo();
bar();
//2

function wait(message) {
  setTimeout(() => {
    console.log(message);
  }, 2000);
}
wait("Joking, am I?");
//Joking, am I?

var a = 2;
(function IIFE() {
  console.log(a);
})(); //2

for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}
//6
//6
//6
//6
//6

for (var i = 1; i <= 5; i++) {
  (function () {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  })();
}
//6
//6
//6
//6
//6
for (var i = 0; i <= 5; i++) {
  (function () {
    var j = i;
    setTimeout(() => {
      console.log(j);
    }, j * 1000);
  })();
}
//0
//1
//2
//3
//4
//5
