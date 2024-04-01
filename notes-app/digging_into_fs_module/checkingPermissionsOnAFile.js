import { access, constants } from "node:fs";
const file = "/Users/anmolkhanna/Downloads/guessGame";
access(file, constants.F_OK, (err) => {
  console.log(`${file} ${err ? "does not exist" : "exists"}`);
});
//output /Users/anmolkhanna/Downloads/guessGame exists
//In notes for this udemy course, mention what happended a few minutes ago
