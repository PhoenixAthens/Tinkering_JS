function foo() {
  console.log("Hurra");
}
const foo_duplicate = foo; //this is assigning function expression as a value to foo_duplicate
//as a result, we can now refer to foo via foo_duplicate reference variable
foo_duplicate(); //() invokes the function
//Hurra

//IIFE
(function inovkeIm() {
  console.log("I am IIFE!");
})();
//I am IIFE!

//passing a lambda to IIFE
(() => {
  console.log("I am an anonymous IIFE!");
})();
//I am an anonymous IIFE!

//using IIFE to assign value to a variable
let sq_of_72 = (() => {
  return Math.pow(72, 2);
})();
console.log(`The square of 72 is ${sq_of_72}`);
//The square of 72 is 5184

//glimpse of closures
function makeAdder(x) {
  function add(y) {
    return x + y;
  }
  return add;
}
const plus11 = makeAdder(11);
console.log(plus11(23));
//output: 34

const plus15 = makeAdder(15);
const adding_15_to_45 = plus15(45);
console.log(adding_15_to_45);
//output: 60

function countArgs(a, b, c, d) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  console.log(arguments[3]);
  console.log(void 0);
  console.log(Number.isNaN(void 0)); //false
}
countArgs("a", "3", ["Hello", "jel"], 23);
// a
// 3
// [ 'Hello', 'jel' ]
// 23
// undefined
