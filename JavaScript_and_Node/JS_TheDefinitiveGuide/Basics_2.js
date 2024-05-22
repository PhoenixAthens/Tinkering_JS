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
