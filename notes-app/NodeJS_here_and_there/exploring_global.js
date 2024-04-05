const path = require("path");

console.log("Hello World");
global.console.log("JS is not that bad!");
//console is part of the global object
let stringSent = "Hello jason, you have been missing since 13th";
console.log(
  `I was talking to Jason, I was asking him about "${stringSent.slice(13)}"`,
);
console.log(global.__dirname); //this will return undefined,
//because __dirname is a local variable that’s only available in the context of a module, not in the global scope

console.log(__dirname);
console.log(__filename);
console.log(global.Date());
//Fri Apr 05 2024 09:59:41 GMT+0530 (India Standard Time)

//printing the various method available to use in global object
for (let key in global) {
  console.log(`Key: ${key}`);
}
// Key: global
// Key: clearImmediate
// Key: setImmediate
// Key: clearInterval
// Key: clearTimeout
// Key: setInterval
// Key: setTimeout
// Key: queueMicrotask
// Key: structuredClone
// Key: atob
// Key: btoa
// Key: performance
// Key: navigator
// Key: fetch
// Key: crypto
console.log(process.argv0);
///Users/anmolkhanna/.nvm/versions/node/v21.6.1/bin/node

console.log(process.argv);
/*
[
  '/Users/anmolkhanna/.nvm/versions/node/v21.6.1/bin/node',
  '/Users/anmolkhanna/Downloads/Programming_Savings_2024/Node_with_Andrew/Notes_App/notes-app/NodeJS_here_and_there/exploring_global.js'
]
*/
console.log(path.basename(process.argv[1])); //exploring_global.js
const cmdArgs = process.argv;
console.log(cmdArgs);
for (let i in cmdArgs) {
  console.log(path.basename(cmdArgs[i]));
}
//node
//exploring_global.js

//if we use for..in loop over an array we get the index of each element in the array, like so
const arr = ["A", "V", "G", "J", "K"];
for (let i in arr) {
  console.log(i);
}
// 0
// 1
// 2
// 3
// 4
//for..in is better suited when used over an object

function grabFlagValue(flag) {
  let argv = process.argv;
  let flagIndexValue = argv.indexOf(flag) + 1;
  return argv[flagIndexValue];
}
let name = grabFlagValue("--user.name");
let mail = grabFlagValue("--user.mail");
console.log(`The user name is ${name}\n, the email is ${mail}`);
// The user name is Phoenix
// , the email is phoenix.something@hotmail.com
