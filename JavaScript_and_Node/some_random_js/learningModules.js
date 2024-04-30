function user() {
  let username, password;
  function doLogin(uName, pWord) {
    username = uName;
    password = pWord;
  }
  let publicAPI = {
    login: doLogin,
  };
  return publicAPI;
}

let freddy = user();
freddy.login("f125", "yoddle_34");

function foo() {
  console.log(this.bar);
}
let bar = "Howdy!";
var obj1 = {
  bar: "obj1",
  foo: foo,
};
var obj2 = {
  bar: "obj2",
};
foo(); //output: undefined (node is running in strict mode by default)
obj1.foo(); //output: obj1
foo.call(obj2); //output: obj2
new foo(); //undefined
