import { access, constants } from "node:fs";
const file = "/Users/anmolkhanna/Downloads/guessGame";
const split = file.split("/");
access(file, constants.F_OK, (err) => {
  console.log(
    `${split[split.length - 1]} ${err ? "does not exist" : "exists"}`,
  );
});

//In the code below, the callback containing err will be fired if the file is not readable
access(file, constants.R_OK, (err) => {
  //console.log(err.message); //SyntaxError: Unexpected end of input
  console.log(
    `${split[split.length - 1]} ${err ? "is not readable" : "is readable"}`,
  );
});

access(file, constants.W_OK, (err) => {
  console.log(
    `${split[split.length - 1]} ${err ? "is not writable" : "is writable"}`,
  );
});

access(file, constants.X_OK, (err) => {
  console.log(
    `${split[split.length - 1]} is ${err ? "not executable" : "executable"}`,
  );
});
//output => /Users/anmolkhanna/Downloads/guessGame exists
//output => /Users/anmolkhanna/Downloads/guessGame is writable
//output => /Users/anmolkhanna/Downloads/guessGame is readable

// OUTPUT after using .split("/")
// guessGame exists
// guessGame is readable
// guessGame is writable
// guessGame is executable

//checking if file is readable, writable and executable
access(file, constants.R_OK | constants.W_OK | constants.X_OK, (err) => {
  console.log(`${split[split.length - 1]}, ${err ? "is not" : "is"} RWX`);
});
//guessGame, is readable and writable
//after running `chmod ugo-x guessGame`
//OUTPUT = guessGame, is not RWX
//after running `chmod ugo+x guessGame`
//OUTPUT = guessGame, is RWX
