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

// yargs(hideBin(process.argv))
//   .command(
//     "curl <url>",
//     "fetch the contents of the URL",
//     () => {},
//     (argv) => {
//       console.info(argv);
//     },
//   )
//   .demand(1)
//   .parse();
//{ _: [ 'curl' ], '$0': 'using_yargs.js', url: 'http://google.com' }

const fromYargs = yargs(process.argv).alias({
  n: "name",
  m: "email",
  t: "text",
}).argv;
console.log(fromYargs);
//on running
//node using_yargs.js -n "hello.txt" --email "j@n.com" -t "Hello there"

// {
//   _: [
//     '/Users/anmolkhanna/.nvm/versions/node/v21.6.1/bin/node',
//     '/Users/anmolkhanna/Downloads/Programming_Savings_2024/Node_with_Andrew/Notes_App/notes-app/Trying_out_some_npm_Modules/using_yargs.js'
//   ],
//   n: 'hello.txt',
//   name: 'hello.txt',
//   email: 'j@n.com',
//   m: 'j@n.com',
//   t: 'Hello there',
//   text: 'Hello there',
//   '$0': 'using_yargs.js'
// }

console.log(fromYargs.n); //hello.txt
console.log(fromYargs.m); /*j@n.com*/
console.log(fromYargs.t); //Hello there

console.log("=".repeat(40));

const fromYargs_2 = yargs(process.argv).alias({
  n: "name",
  m: "email",
  t: "text",
}).argv;
console.log(fromYargs_2);
//OUTPUT on running `node using_yargs.js -n "hello.txt" --email "j@n.com" -t "Hello there"`

// {
//   _: [
//     '/Users/anmolkhanna/.nvm/versions/node/v21.6.1/bin/node',
//     '/Users/anmolkhanna/Downloads/Programming_Savings_2024/Node_with_Andrew/Notes_App/notes-app/Trying_out_some_npm_Modules/using_yargs.js'
//   ],
//   n: 'hello.txt',
//   name: 'hello.txt',
//   email: 'j@n.com',
//   m: 'j@n.com',
//   t: 'Hello there',
//   text: 'Hello there',
//   '$0': 'using_yargs.js'
// }
console.log("=".repeat(40));

const fromYargs_3 = yargs(process.argv)
  .alias({
    f: "foo",
    n: "name",
    t: "text",
    m: "mail",
  })
  .array("foo").argv;
console.log(fromYargs_3);
//output
// {
//   _: [
//     '/Users/anmolkhanna/.nvm/versions/node/v21.6.1/bin/node',
//     '/Users/anmolkhanna/Downloads/Programming_Savings_2024/Node_with_Andrew/Notes_App/notes-app/Trying_out_some_npm_Modules/using_yargs.js'
//   ],
//   n: 'hello.txt',
//   name: 'hello.txt',
//   mail: 'j@n.com',
//   m: 'j@n.com',
//   t: 'Hello there',
//   text: 'Hello there',
//   f: [
//     'hello',    'there',
//     'how',      'are',
//     'you',      'doing',
//     'I',        'am',
//     'doing',    'fine',
//     'thankyou'
//   ],
//   foo: [
//     'hello',    'there',
//     'how',      'are',
//     'you',      'doing',
//     'I',        'am',
//     'doing',    'fine',
//     'thankyou'
//   ],
//   '$0': 'using_yargs.js'
// }

const fromYargs_4 = yargs(process.argv)
  .alias({
    b: "bean",
  })
  .boolean("bean")
  .parse();
console.log(fromYargs_4);
//if we run `node using_yargs.js -b hello.txt`
//we get
// {
//   _: [
//     '/Users/anmolkhanna/.nvm/versions/node/v21.6.1/bin/node',
//     '/Users/anmolkhanna/Downloads/Programming_Savings_2024/Node_with_Andrew/Notes_App/notes-app/Trying_out_some_npm_Modules/using_yargs.js'
//   ],
//   b: true,
//   bean: true,
//   '$0': 'using_yargs.js'
// }

//if we run `node using_yargs.js -b false hello.txt`
//we get
// {
//   _: [
//     '/Users/anmolkhanna/.nvm/versions/node/v21.6.1/bin/node',
//     '/Users/anmolkhanna/Downloads/Programming_Savings_2024/Node_with_Andrew/Notes_App/notes-app/Trying_out_some_npm_Modules/using_yargs.js',
//     'hello.txt'
//   ],
//   b: false,
//   bean: false,
//   '$0': 'using_yargs.js'
// }

//if we run `node using_yargs.js -b`
//we get
// {
//   _: [
//     '/Users/anmolkhanna/.nvm/versions/node/v21.6.1/bin/node',
//     '/Users/anmolkhanna/Downloads/Programming_Savings_2024/Node_with_Andrew/Notes_App/notes-app/Trying_out_some_npm_Modules/using_yargs.js'
//   ],
//   b: true,
//   bean: true,
//   '$0': 'using_yargs.js'
//
//

console.log("=".repeat(40));

let using_choices = yargs(process.argv.slice(2))
  .alias("i", "ingredient")
  .describe("i", "choose your sandwich ingredients")
  .choices("i", ["peanut-butter", "jelly", "banana", "pickles"])
  .help("help")
  .parse();
console.log(using_choices);
//if we run the command "node using_yargs.js -i peanut-butter"
// {
//   _: [],
//   i: 'peanut-butter',
//   ingredient: 'peanut-butter',
//   '$0': 'using_yargs.js'
// }

//if we run the command 'node using_yargs.js --ingredients "peanut-butter"'
//{ _: [], ingredients: 'peanut-butter', '$0': 'using_yargs.js' }

//if we run the command 'node using_yargs.js -i beans'
// Options:
//       --version     Show version number                                [boolean]
//   -i, --ingredient  choose your sandwich ingredients
//                         [choices: "peanut-butter", "jelly", "banana", "pickles"]
//       --help        Show help                                          [boolean]

// Invalid values:
//   Argument: i, Given: "beans", Choices: "peanut-butter", "jelly", "banana", "pickles"

//if we run 'node using_yargs.js'
//{ _: [], '$0': 'using_yargs.js' }

//if we run 'node using_yargs.js --help' OR 'node using_yargs.js help'
// Options:
//       --version     Show version number                                [boolean]
//   -i, --ingredient  choose your sandwich ingredients
//                         [choices: "peanut-butter", "jelly", "banana", "pickles"]
//       --help        Show help                                          [boolean]

//passing object to `option()`
// let argv_using_choice_object = yargs(process.argv.slice(2)).option(
//   "size",
//   {
//     alias: "s",
//     describe: "choose a size",
//     choices: ["xs", "s", "m", "l", "xl"],
//   },
//   "height",
//   {
//     alias: "h",
//     describe: "choose a height",
//     choices: ["ll", "l", "i", "s", "b"],
//   },
//   "weight",
//   {
//     alias: "w",
//     describe: "choose a weight",
//     choices: ["High", "Mid", "fit", "low"],
//   },
// );
// console.log(argv_using_choice_object);

// the above code should be written this so, else it would give this error "YError: Too many arguments provided. Expected max 2 but received 6."
let argv_using_choice_object = yargs(process.argv.slice(2))
  .option("size", {
    alias: "s",
    describe: "choose a size",
    choices: ["xs", "s", "m", "l", "xl"],
  })
  .option("height", {
    alias: "h",
    describe: "choose a height",
    choices: ["ll", "l", "i", "s", "b"],
  })
  .option("weight", {
    alias: "w",
    describe: "choose a weight",
    choices: ["High", "Mid", "fit", "low"],
  })
  .parse();

console.log(argv_using_choice_object);
//On running, 'node using_yargs.js -s xs --height ll -w High'
//we get the following output:
// {
//   _: [],
//   s: 'xs',
//   size: 'xs',
//   height: 'll',
//   h: 'll',
//   w: 'High',
//   weight: 'High',
//   '$0': 'using_yargs.js'
// }
