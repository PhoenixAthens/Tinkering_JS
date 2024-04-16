import yargs from "yargs";
import { hideBin } from "yargs/helpers";
console.log(yargs(process.argv));
// YargsInstance {
//   customScriptName: false,
//   parsed: false,
//   '$0': 'usingYargs.js',
//   argv: [Getter]
// }
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
console.log(yargs.argv);
//undefined

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.slice(2));
// [
//   3, 4, 5,  6,
//   7, 8, 9, 10
// ]
console.log(arr.slice(2, 5)); //inclusive of start(2) and exclusive of end(5)
// [ 3, 4, 5 ]

console.log(hideBin(arr));
//OUTPUT
// [
//   3, 4, 5,  6,
//   7, 8, 9, 10
// ]
//So hideBin simply takes the array and return array.slice(2)

console.log(yargs(hideBin(process.argv)));
//OUTPUT (unexpected), same as `console.log(yargs(process.argv));`
// YargsInstance {
//   customScriptName: false,
//   parsed: false,
//   '$0': 'using_yargs.js',
//   argv: [Getter]
// }

yargs(hideBin(process.argv))
  .command(
    "curl <url>",
    "fetch the contents of the URL",
    () => {},
    (argv) => {
      console.info(argv);
    },
  )
  .demand(1)
  .parse();
//{ _: [ 'curl' ], '$0': 'using_yargs.js', url: 'http://google.com' }
