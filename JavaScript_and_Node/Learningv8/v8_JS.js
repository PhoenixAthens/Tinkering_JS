let array = [1, 2, 3];
array.push(4.5);
array.push("x");
console.log(array.hasOwnProperty("0")); //true
console.log(array); //[ 1, 2, 3, 4.5, 'x' ]

array[9] = 28; //creating a holey array
console.log(8 >= 0 && 8 < array.length); //true
console.log(array); //[ 1, 2, 3, 4.5, 'x', <4 empty items>, 28 ]

console.log(array.hasOwnProperty(8)); //false
console.log(array[8]); //undefined
console.log(array); //[ 1, 2, 3, 4.5, 'x', <4 empty items>, 28 ]

console.log(Array.prototype.hasOwnProperty("0")); //false
console.log(Array.prototype.hasOwnProperty(Array.prototype, "8")); //false
console.log(Array.prototype.entries()); //Object [Array Iterator] {}

console.log(Array.hasOwnProperty("0")); //false
console.log(Array.hasOwnProperty(Array.prototype, "8")); //false

console.log(Object.prototype.hasOwnProperty("0")); //false
console.log(Object.prototype.hasOwnProperty("8")); //false

console.log("=".repeat(40));
let notAnArray = {};
notAnArray["0"] = 0;
notAnArray["1"] = 1;
notAnArray["2"] = 2;
notAnArray.length = 3;

let actualArray = Array.prototype.slice.call(notAnArray, 0);
actualArray.forEach((val, ind) => {
  console.log(`${ind} -> ${val}`);
});
// 0 -> 0
// 1 -> 1
// 2 -> 2
//console.log(Object.hasOwnPrototype());

const logArgs = (...args) => {
  args.forEach((val, ind) => {
    console.log(`${ind}->${val}`);
  });
};
logArgs("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
// 0->0
// 1->1
// 2->2
// 3->3
// 4->4
// 5->5
// 6->6
// 7->7
// 8->8
// 9->9
