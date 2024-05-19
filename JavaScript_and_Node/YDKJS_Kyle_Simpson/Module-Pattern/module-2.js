var myModule = (function Manager() {
  var modules = {};

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
//boink.apply(boink, arr);
//I habe nur für Jodha ein bischen hunger!

myModule.define("bar", [], function () {
  function hello(who) {
    return "Let me introduce: " + who;
  }
  return {
    hello: hello,
  };
});
myModule.define("foo", ["bar"], function (bar) {
  var hungry = "hippo";
  function awesome() {
    console.log(bar.hello(hungry).toUpperCase());
  }
  return {
    awesome: awesome,
  };
});
var bar = myModule.get("bar");
var foo = myModule.get("foo");
console.log(bar.hello("hippo"));
foo.awesome();
//Let me introduce: hippo
//LET ME INTRODUCE: HIPPO
