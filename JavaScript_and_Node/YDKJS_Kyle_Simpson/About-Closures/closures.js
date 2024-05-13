function foo() {
  var a = 2;
  function bar() {
    console.log(a);
  }
  bar();
}
foo()();
//In the code above 'bar' has closure over the scope of foo
//thus, we get the output
//2

//a better example to demonstrate the power of closures
function foo() {
  var a = 3;
  function bar() {
    console.log(a);
  }
  return bar;
}
var baz = foo();
//baz(); //3

//If we leave the name of both the function same, the declaration at line 12 shadows the one at line 1!
//This is because function definitions will be hoisted will be hoisted
//if we comment out the function call at line 22, we get no output
//this is because the call to foo at line 8, returns reference to `bar` and we've left it unused, however, if we change code at line 8, to
//foo()();, we get 3

function foo_3() {
  var a = 2;
  function baz() {
    console.log(a);
  }
  barM(baz);
}
function barM(fn) {
  fn();
}
foo_3(); //2
