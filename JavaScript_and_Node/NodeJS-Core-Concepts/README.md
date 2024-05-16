_Based on Reply from AmazonQ_
Q1:: In this code

```js
_addListener(eventName, fn){
  this.listeners[eventName] = this.listeners[eventName] || [];
  this.listeners[eventName].push(fn);
  return this;
}
```

What's the purpose of returning `this`?

A:: The meaning of returning `this` in the `_addListener(eventName, fn)` function is to enable method chaining. Method chaining is a programming technique that allows you to call multiple methods on the same object in a single statement, by having each method return the object itself.

In the case of the `_addListener(eventName, fn)` function, returning `this` allows you to chain multiple calls to `_addListener()` together, like this:

```js
emitter._addListener('event1', fn1')
  ._addListener('event2', fn2)
  ._addListener('event3', fn3);
```

This makes the code more concise and readable, as you can add multiple event listeners in a single line of code.

By returning `this` the `_addListener()` method is returning the `EventEmitter` instance itself, which allows you to continue calling other methods on the same instance. This is a common pattern in JS, espeically in libraries and frameworks that provide a fluent API.

So, in summary, the purpose of returning `this` in the `_addListener()` function is to enable method chaining and provide a more fluent API for working with the `EventEmitter` class.

---
