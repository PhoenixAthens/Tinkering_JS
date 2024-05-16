//taken from https://freecodecamp.org/news/how-to-code-your-own-event-emitter-in-node-js-a-step-by-step-guide-e13b7e7908e1/
class EventEmitter {
  listeners = {};

  //my implementation
  addListener(eventName, fn) {
    if (Object.hasOwnProperty.call(this.listeners, eventName)) {
      this.listeners[eventName].push(fn);
    } else {
      this.listeners[eventName] = [];
      this.listeners[eventName].push(fn);
    }
    return this;
  }
  //from freecodecamp
  _addListener(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(fn);
    return this;
  }

  on(eventName, fn) {}

  removeListener(eventName, fn) {}

  off(eventName, fn) {}

  once(eventName, fn) {}

  emit(eventName, fn) {}

  listenerCount(evenName) {}

  rawListeners(eventName) {}
}
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
