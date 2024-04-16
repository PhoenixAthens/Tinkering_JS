//Prototypes
let foo = {
  a: 42,
};
let bar = Object.create(foo);
bar.b = "Hello wrld";
console.log(bar.a); //42
console.log(bar.b); //Hello wrld

bar.a = 98;
console.log(foo.a); //42
console.log(bar.a); //98
