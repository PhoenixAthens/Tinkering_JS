function identify() {
  return this.name.toUpperCase();
}
function speak() {
  var greeting = "Hello, I'm " + identify.call(this);
  console.log(greeting);
}
var me = {
  name: "Kyle",
};
var you = {
  name: "Reader",
};
identify.call(me); //KYLE
identify.call(you); //READER

speak.call(me); //Hello, I'm KYLE
speak.call(you); //Hello, I'm READER

var demoDestroy = {
  name: "Rabbit",
  games: function () {
    console.log(`${this.name} like to play Contra!`);
  },
};
//we switched contexts for the demoDestroy.games function by calling it with a different reference for 'this'
demoDestroy.games.call(me);
//Kyle like to play Contra!

//simply calling .games() function of demoDestroy object
demoDestroy.games();
//Rabbit like to play Contra!
