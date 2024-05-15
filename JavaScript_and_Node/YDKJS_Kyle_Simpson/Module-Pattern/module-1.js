function CoolModule() {
  var something = "cool";
  var author = [1, 2, 3];
  function doSomething() {
    console.log(something);
  }
  function doAnother() {
    console.log(author.join("!"));
  }
  return {
    doSomething: doSomething,
    doAnother: doAnother,
  };
}
var foo = CoolModule();
foo.doSomething();
foo.doAnother();
// cool
// 1!2!3

//Singleton pattern with modules
let bar = (function CoolFunc() {
  var something = "Cool";
  var lst = [1, 2, 3];
  function doSomething() {
    console.log(`Okay Bro! ${something}`);
  }
  function doAnother() {
    console.log(lst.join("!"));
  }
  return {
    doSomething: doSomething,
    doAnother: doAnother,
  };
})();
bar.doSomething();
bar.doAnother();
// Okay Bro! Cool
// 1!2!3

function CoolMod(arg) {
  function identity() {
    console.log(arg);
  }
  return {
    identity: identity,
  };
}
let foo1 = CoolMod("JSON");
let foo2 = CoolMod("YAML");
foo1.identity(); //JSON
foo2.identity(); //YAML

var foofy = (function CoolModule(id) {
  function change() {
    publicAPI.identify = identify2;
  }
  function identify1() {
    console.log(id);
  }
  function identify2() {
    console.log(id.toUpperCase());
  }
  var publicAPI = {
    change: change,
    identify: identify1,
  };
  return publicAPI;
})("Jane-fonda");
console.log(foofy.identify);
console.log(foofy.change);
console.log(foofy.identify);
// [Function: identify]
// [Function: change]
// [Function: identify]
foofy.identify();
foofy.change();
foofy.identify();
// Jane-fonda
// JANE-FONDA

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
