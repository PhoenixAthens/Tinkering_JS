const events = require("events");
const process = require("process");
const emitter = new events.EventEmitter();
emitter.on("fire", (message, sender) => {
  console.log(`${sender}: ${message}`);
});
emitter.emit("fire", "Yuuuhhoooo!", "Jason");
emitter.emit("fire", "Is this an idiot?", "Kate");

process.stdin.on("data", (data) => {
  const input = data.toString().trim();
  if (input === "exit") {
    emitter.emit("fire", "Goodbye!", "process");
    process.exit();
  }
  emitter.emit("fire", input, "terminal");
});

//OUTPUT:

// Jason: Yuuuhhoooo!
// Kate: Is this an idiot?
// Hello there
// terminal: Hello there
// I am just here to watch over the users
// terminal: I am just here to watch over the users
// exit
// process: Goodbye!
