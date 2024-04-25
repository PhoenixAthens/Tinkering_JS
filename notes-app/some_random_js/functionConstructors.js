function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

const p1 = new Person("Jacky", "denkins");
const p2 = new Person("kale", "nash");
console.log(p1);
console.log(p2);
// Person { firstName: 'Jacky', lastName: 'denkins' }
// Person { firstName: 'kale', lastName: 'nash' }

console.log(Person.prototype);
//{}

const p3 = Person("j", "k");
console.log(p3); //undefined

//console.log(p3.firstName); //TypeError: Cannot read properties of undefined (reading 'firstName')

Person.prototype.greet = function () {
  console.log(`Hello ${this.firstName} ${this.lastName}!`);
};

p1.greet();
p2.greet();
// Hello Jacky denkins!
// Hello kale nash!
console.log(p1.__proto__);
console.log(p2.__proto__);
console.log(p1.__proto__ === p2.__proto__);
