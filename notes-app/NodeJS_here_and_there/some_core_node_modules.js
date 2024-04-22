const path = require("path");
const util = require("util");
const v8 = require("v8");
const readline = require("readline");
console.log(__filename);
console.log(path.basename(__filename));
// /Users/anmolkhanna/Downloads/Programming_Savings_2024/Node_with_Andrew/Notes_App/notes-app/NodeJS_here_and_there/some_core_node_modules.js
// some_core_node_modules.js

console.log(__dirname);
console.log(path.basename(__dirname));
// /Users/anmolkhanna/Downloads/Programming_Savings_2024/Node_with_Andrew/Notes_App/notes-app/NodeJS_here_and_there
// NodeJS_here_and_there

const dirUpload = path.join(__dirname, "www", "files", "uploads");
console.log(dirUpload);
// /Users/anmolkhanna/Downloads/Programming_Savings_2024/Node_with_Andrew/Notes_App/notes-app/NodeJS_here_and_there/www/files/uploads

util.log(dirUpload);
util.log(path.basename(__filename));
// 17 Apr 08:54:14 - /Users/anmolkhanna/Downloads/Programming_Savings_2024/Node_with_Andrew/Notes_App/notes-app/NodeJS_here_and_there/www/files/uploads
// 17 Apr 08:54:14 - some_core_node_modules.js

util.log(v8.getHeapStatistics());
// 17 Apr 08:55:52 - {
//   total_heap_size: 4407296,
//   total_heap_size_executable: 262144,
//   total_physical_size: 3784704,
//   total_available_size: 2195156312,
//   used_heap_size: 3543896,
//   heap_size_limit: 2197815296,
//   malloced_memory: 262320,
//   peak_malloced_memory: 108032,
//   does_zap_garbage: 0,
//   number_of_native_contexts: 1,
//   number_of_detached_contexts: 0,
//   total_global_handles_size: 8192,
//   used_global_handles_size: 2496,
//   external_memory: 1432953
// }

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("What's your name? ", (answer) => {
  console.log(`My name is ${answer}`);
});
// What's your name? TONY
// My name is TONY
