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
