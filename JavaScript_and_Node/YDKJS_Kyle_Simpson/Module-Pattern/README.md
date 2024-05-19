Alright folks, let's examine the Module below, Kyle presented this as a proof-of-concept and it went from above my head!

```js
var myModule = (function Manager() {
  var modules = {}; // ---------(1)

  function define(name, deps, impl) {
    for (var i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]];
    }
    modules[name] = impl.apply(impl, deps);
  }

  function get(name) {
    return modules[name];
  }
  return {
    define: define,
    get: get,
  };
})();
```

- Manager(), the IIFE returns to us an object that exposes the methods `define` and `get`.
- `get(name)` gives us the value associated with the key `name` stored in the module object `modules`
- `define(name, deps, impl)` takes three arguments

  - `name`: the name for the key in module
  - `deps`: the array of dependencies
  - `impl`: the wrapper-function
    `define(...)` bascially assigns to each element of the `deps` array, the value or object associated with the argument `name` in the `modules` object, and then adds to the `modules` object a key:value pair where `key` corresponds to the values passed in as argument to `name` and `value` corresponds to the function passed in as an argument to the param `impl` with the array passed in as argument to `deps` param, passed in as an argument to the `impl` function.

  `Sounds Complicated? Yeah, I thought so too, when I read the code the first time. But it isn't, when you think about it at a more general level!`

- what does this statement do `modules\[name]=impl.apply(impl,deps);`?

Well, let's explain with an example! The part that seems to confuse us both is regarding how the `.apply()` method is working? Now at a deeper level, it's probably relying on concepts that I can barely touch upon (don't understand them (YET!), but at the surface level, it's basically doing the following:

```js
function boink(deps) {
  deps.hello("Jodha"); //I habe nur für Jodha ein bischen hunger!
  deps.hello_2("akbar"); //I akbar
}
let arr = [
  {
    hello: function (hunger) {
      console.log(`I habe nur für ${hunger} ein bischen hunger!`);
    },
    hello_2: function (younger) {
      console.log(`I ${younger}`);
    },
  },
];
boink.apply(boink, arr);
//I habe nur für Jodha ein bischen hunger!
```

`boink.apply(boink, arr)` basically passes to function `boink` the second argument (here, arr: the array of objects) as an argument. This is the reason why I can access both `hello` and `hello_2` from inside `boink`, but there's a catch, if we pass an array as the second argument to `.apply` we can only access the first element of that array, say I change my code like so,

```js
function boink(deps) {
  console.log(deps);
  deps.hello("Jodha"); //I habe nur für Jodha ein bischen hunger!
  deps.hello_2("akbar"); //I akbar
}
let arr = [
  {
    hello: function (hunger) {
      console.log(`I habe nur für ${hunger} ein bischen hunger!`);
    },
    hello_2: function (younger) {
      console.log(`I ${younger}`);
    },
  },
  {
    hello_3: function (hunger) {
      console.log(`We ${hunger}`);
    },
    hello_4: function (younger) {
      console.log(`You ${younger}`);
    },
  },
];
boink.apply(boink, arr);
//I habe nur für Jodha ein bischen hunger!
```

The `console.log(deps)` in `boink` gives us first the following output `{ hello: \[Function: hello], hello_2: \[Function: hello_2] }`, we can't access the second element of the array, and if we do something like `console.log(deps\[0])` or `console.log(deps\[1])`, the output is `undefined`.

`Interesting!! Isn't it?`

---
