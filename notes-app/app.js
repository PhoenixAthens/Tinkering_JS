const fromNotes = require("./notes.js");
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
