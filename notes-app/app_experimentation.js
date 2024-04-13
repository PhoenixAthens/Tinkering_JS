const fromNotes = require("./notes.js");
const yargs = require("yargs");
console.log(fromNotes());

//accessing the command line arguments
console.log(process.argv);
//Simply running node app.js, gives us
// [
//   '/Users/anmolkhanna/.nvm/versions/node/v21.6.1/bin/node',
//   '/Users/anmolkhanna/Downloads/Programming_Savings_2024/Node_with_Andrew/Notes_App/notes-app/app.js'
// ]

//node app.js andrew --title="hello" --content="I lived in the hinterland"
// [
//   '/Users/anmolkhanna/.nvm/versions/node/v21.6.1/bin/node',
//   '/Users/anmolkhanna/Downloads/Programming_Savings_2024/Node_with_Andrew/Notes_App/notes-app/app.js',
//   'andrew',
//   '--title=hello',
//   '--content=I lived in the hinterland'
// ]

//don't use import when using yargs, it leads to currently not understood (by us) behavior
console.log(yargs.argv);
//on running  % node usingYargs.js add --title="Phoenix" -c "echo 'hello'"
//we get "{ _: [ 'add' ], title: 'Phoenix', c: "echo 'hello'", '$0': 'app.js' }"

//running % npm app.js --version
//1.0.0
//the version number is fetched from package.json file

//we can override the version number yargs gets from package.json using the following:
yargs.version("2.2.8");
//Now, when we run "% node app_experimentation.js --version"
//you still get the same versio as in package.json
