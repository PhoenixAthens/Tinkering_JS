import { access, constants, open, close, write } from "node:fs";
import { Buffer } from "node:buffer";

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

let path = "/Users/anmolkhanna/Downloads/Scrap_Use/discarded.txt";

//in the HOF below, we first check if the file alreday exists, if it does we return
//else we open the file using opne, which automatically creates the file and use the file-descriptor to write data to the file
//and finally close the file at the end.
function writeData(fd) {
  let data = Buffer.from("Hello World! You still persisting with your cruely?");
  write(fd, data, 0, data.length, null, (err) => {
    if (err) {
      console.log("Failed to write to file!");
    } else {
      console.log("Data written successfully!");
    }
  });
}
access(path, (err) => {
  if (!err) {
    console.log("File already exists");
    return;
  }
  open(path, "wx", (err, fd) => {
    if (err) {
      console.log("error opening file!");
      throw err;
    }
    try {
      writeData(fd);
    } finally {
      close(fd, (err) => {
        //the callback in close is triggered regardless of whether an error occurs or not!
        if (err) throw err;
      });
    }
  });
});
//if the file alrady exists
//OUTPUT- File already exists

//Let's change discard.c to discarded.text, a file that doesn't exist
//OUTPUT:Data written successfully!
//`cat discarded.txt`
//Hello World! You still persisting with your cruely?%

//the recommended way of writing a file
open(path, "wx", (err, fd) => {
  if (err) {
    if (err.code === "EEXIST") {
      console.log("File already exists!");
      return;
    }
    throw err;
  }
  try {
    writeData(fd);
  } finally {
    close(fd, (err) => {
      if (err) {
        throw err;
      }
    });
  }
});
