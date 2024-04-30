const yargs = require("yargs");
const getNotes = function () {
  return "Your notes ...";
};
console.log(yargs.argv);

yargs
  .command("add", "Adds a note!", () => {
    console.log("Adding a note!");
  })
  .help()
  .parse();

yargs
  .command("remove", "Removes a note!", () => {
    console.log("Removing a note!");
  })
  .help()
  .parse();

yargs
  .command("read", "Reads a note", () => {
    console.log("Reading a note!");
  })
  .help()
  .parse();

yargs
  .command("list", "List all the notes", () => {
    console.log("Listing all the notes");
  })
  .help()
  .parse();
