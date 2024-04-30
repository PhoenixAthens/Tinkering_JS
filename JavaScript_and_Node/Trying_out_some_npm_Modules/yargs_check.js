import yargs from "yargs/yargs";
// const argv = yargs(process.argv.slice(2)).check((argv, options) => {
//   const filePath = argv._;
//   if (filePath.length > 1) {
//     throw new Error("Only 0 or 1 files may be passed.");
//   } else {
//     return true;
//   }
// });
//throws an error if more than one files are passed as argument to `node` command

let argv_using_choice_object = yargs(process.argv.slice(2))
  .option(
    "size",
    {
      alias: "s",
      describe: "choose a size",
      choices: ["xs", "s", "m", "l", "xl"],
    },
    "height",
    {
      alias: "h",
      describe: "choose a height",
      choices: ["ll", "l", "i", "s", "b"],
    },
    "weight",
    {
      alias: "w",
      describe: "choose a weight",
      choices: ["High", "Mid", "fit", "low"],
    },
  )
  .parse();
console.log(argv_using_choice_object);
//OUTPUT: { _: [], s: 'xs', size: 'xs', height: 'll', '$0': 'yargs_check.js' }
