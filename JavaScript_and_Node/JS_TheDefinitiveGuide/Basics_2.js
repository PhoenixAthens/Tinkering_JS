function sayMyName(name) {
  console.log(name);
  sayMyName.count++;
}
sayMyName.count = 0;
sayMyName`Johnify`;
sayMyName`Tohnify`;
sayMyName`Kohnify`;
sayMyName`Lohnify`;
sayMyName`Oohnify`;
sayMyName`Pohnify`;
sayMyName`Aohnify`;
sayMyName`Wohnify`;
console.log(sayMyName.count);
// [ 'Johnify' ]
// [ 'Tohnify' ]
// [ 'Kohnify' ]
// [ 'Lohnify' ]
// [ 'Oohnify' ]
// [ 'Pohnify' ]
// [ 'Aohnify' ]
// [ 'Wohnify' ]
// 8

sayMyName("hii"); //hii

function sayMyName_onceMore(name) {
  return name;
}
console.log(typeof sayMyName_onceMore`umlaut`); //object
console.log(typeof sayMyName_onceMore("umlaut")); //string
console.log(sayMyName_onceMore`umlaut`.keys()); //Object [Array Iterator] {}
let arr = [1, 2, 3];
console.log(arr.keys()); //Object [Array Iterator] {}
//So we get an array?
//look into it!

//The proper way to use tagged template literals
function tag(strings, ...values) {
  console.log(strings);
  console.log(values);
  return "Processed Template Literal!";
}
let nameOF = "Jam";
let age = 19;
console.log(tag`Hello, ${nameOF}, Hope you had a great ${age}-th birthday!!`);
//[ 'Hello, ', ', Hope you had a great ', '-th birthday!!' ]
//[ 'Jam', 19 ]
//Processed Template Literal!

//Pattern Matching
let text = "testing: 1, 2, 3";
let pattern = /\d+/g;
console.log(pattern.test(text));
console.log(text.search(pattern));
console.log(text.match(pattern));
console.log(text.replace(pattern, "#"));
console.log(text.split(/\D+/));
// true
// 9
// [ '1', '2', '3' ]
// testing: #, #, #
// [ '', '1', '2', '3' ]
console.log(text.split("testing:")); //[ '', ' 1, 2, 3' ]

let strName = "a string";
let symName = Symbol("prop");
console.log(typeof strName);
console.log(typeof symName);
let obj = {};
obj[symName] = "I am a symbol"; //string
obj[strName] = "I am a string"; //symbol

let symbol1 = Symbol("Jones");
let symbol2 = Symbol("Jones");
console.log(symbol1 === symbol2); //false
console.log(symbol1);
console.log(symbol2);
console.log(symbol1.toString());
console.log(symbol2.toString());
// Symbol(Jones)
// Symbol(Jones)
// Symbol(Jones)
// Symbol(Jones)

let symbol_alias = Symbol.for("Jones"); //this adds the first entry to the Symbol registry, the Symbols created using `Symbol()` are not part of that registry
console.log(symbol1 == symbol_alias); //false
console.log(symbol2 == symbol_alias); //false

let symbol_alias2 = Symbol.for("Jones");
console.log(symbol_alias == symbol_alias2); //true

console.log(Symbol.keyFor(symbol_alias)); //Jones
console.log(Symbol.keyFor(symbol_alias2)); //Jones
console.log(Symbol.keyFor(symbol_alias) === Symbol.keyFor(symbol_alias2));
