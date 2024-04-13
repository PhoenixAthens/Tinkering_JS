import yargs from "yargs";
console.log(yargs(process.argv));
// YargsInstance {
//   customScriptName: false,
//   parsed: false,
//   '$0': 'usingYargs.js',
//   argv: [Getter]
// }
console.log("me1e");
console.log(yargs(process.argv).argv);
//The above returns:
/*
{
  _: [
    '/Users/anmolkhanna/.nvm/versions/node/v21.6.1/bin/node',
    '/Users/anmolkhanna/Downloads/Programming_Savings_2024/Node_with_Andrew/Notes_App/notes-app/Trying_out_some_npm_Modules/usingYargs.js',
    'add'
  ],
  title: 'Phoenix',
  c: "echo 'hello'",
  '$0': 'usingYargs.js'
}
*/

//when we run the program using the command `node usingYargs.js --help`
//`console.log(yargs(process.argv).argv);` gives the following
// Options:
//   --help     Show help                                                 [boolean]
//   --version  Show version number                                       [boolean]
//and the program quits after that
console.log(process.argv);
/*
  [
    '/Users/anmolkhanna/.nvm/versions/node/v21.6.1/bin/node',
    '/Users/anmolkhanna/Downloads/Programming_Savings_2024/Node_with_Andrew/Notes_App/notes-app/Trying_out_some_npm_Modules/usingYargs.js',
    'add',
    '--title=Phoenix',
    '-c',
    "echo 'hello'"
  ]
*/
console.log("me3e");
console.log(yargs.argv);
//undefined
console.log("me4e");
