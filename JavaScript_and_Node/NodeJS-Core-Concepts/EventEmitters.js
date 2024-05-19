const { keys } = require("lodash");

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

  on(eventName, fn) {
    return this.addListener(eventName, fn);
  }

  removeListener(eventName, fn) {
    let lis = this.listeners[eventName];
    if (!lis) return this;
    for (let i = lis.length; i >= 0; i--) {
      if (lis[i] === fn) {
        lis.splice(i, 1);
        break;
      }
    }
    return this;
  }

  off(eventName, fn) {
    return this.removeListener(eventName, fn);
  }

  once(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    let self = this;
    const onceWrapper = () => {
      fn();
      //self.removeListener(eventName, fn); //this line is unnecessary, because fn was never added to the array associated with `eventName`
      self.removeListener(eventName, onceWrapper);
    };
    this.listeners[eventName].push(onceWrapper);
    return this;
  }

  emit(eventName, ...args) {
    let fns = this.listeners[eventName];
    if (!fns) return false;
    fns.forEach((f) => {
      f(...args);
    });
    return true;
  }

  listenerCount(evenName) {
    let fns = this.listeners[evenName] || [];
    return fns.length;
  }

  rawListeners(eventName) {
    return this.listeners[eventName];
  }
}

//Let's do this!
let testRun = new EventEmitter();
testRun.on("Json", () => {
  console.log("Hello1!");
});
testRun.on("Json", () => {
  console.log("Hello2!");
});
testRun.on("Json", () => {
  console.log("Hello3!");
});
testRun.on("Json", () => {
  console.log("Hello4!");
});
let fnTe = () => {
  console.log("Hello5!");
};
testRun.on("Json", fnTe);
testRun.emit("Json");
// Hello1!
// Hello2!
// Hello3!
// Hello4!
// Hello5!
console.log("1=".repeat(40));
testRun.once("Json", () => {
  console.log("I am here for just the sake of it! Don't expect much.");
});
testRun.emit("Json");
// console.log("2=".repeat(40));
// testRun.emit("Json");
// console.log("3=".repeat(40));
// testRun.removeListener("Json", fnTe);
// console.log("4=".repeat(40));
// testRun.emit("Json");
testRun.emit("Json");

testRun.on("Bson", () => {
  console.log("I am here too!");
});

testRun.emit("Bson");
testRun.on("Bson", (a, b) => {
  console.log(`I am here too with ${a}, and ${b}`);
});
testRun.emit("Bson", "JK", "KG");
testRun.on("Bson", (a, b) => {
  console.log(`I am here too with ${a}, and ${b}`);
});
testRun.emit("Bson", "JK", "KG");
module.exports = EventEmitter;
