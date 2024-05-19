const eve = require("./EventEmitters");
let listeners = {};
function addListener(eventName, fn) {
  if (Object.hasOwnProperty.call(listeners, eventName)) {
    listeners[eventName].push(fn);
  } else {
    listeners[eventName] = [];
    listeners[eventName].push(fn);
  }
}
addListener("hello", () => {
  console.log("I am here!");
});
console.log(listeners);
//{ hello: [ [Function (anonymous)] ] }

addListener("hello_2", () => {
  console.log("I am here as well!");
});
console.log(listeners);
// {
//   hello: [ [Function (anonymous)] ],
//   hello_2: [ [Function (anonymous)] ]
// }

addListener("hello", () => {
  console.log("I am here returns!");
});
console.log(listeners);
// {
//   hello: [ [Function (anonymous)], [Function (anonymous)] ],
//   hello_2: [ [Function (anonymous)] ]
// }

//TESTING THE FUNCTIONALITY
let obj = new eve();
obj.addListener("e1", () => {
  console.log("Hello, World!");
});
obj.listeners["e1"][0](); //Hello, World!
console.log(obj.listeners["e2"]); //undefined
if (!obj.listeners["e2"]) {
  //this code block runs if `obj.listeners["e2"]` is un-defined!
  console.log("OHH!");
}
//if the listener doesn't exist, we get `undefined` on calling obj.listener[eventName]

let arr = [1, 2, 3, 4, 5];
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] == 3) {
    arr.splice(i, 1);
  }
}
console.log(arr);
arr.splice(2, 1); //starting at index 2, remove 1 element, thus we get [1, 2, 5]
console.log(arr);
