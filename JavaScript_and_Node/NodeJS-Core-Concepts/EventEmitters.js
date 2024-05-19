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
