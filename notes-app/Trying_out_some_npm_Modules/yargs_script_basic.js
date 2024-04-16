#!/Users/anmolkhanna/.nvm/versions/node/v21.6.1/bin/node
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
//if you remove {} from around hideBin, the program gives the following error
// import hideBin from "yargs/helpers";
//        ^^^^^^^
// SyntaxError: The requested module 'yargs/helpers' does not provide an export named 'default'

// const yargs = require("yargs/yargs");
// const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
if (argv.ships > 3 && argv.distance < 53.5) {
  console.log("Plunder more riffiwobles");
} else {
  console.log("Retreat from the xupptumblers");
}
//if we run -> ./yargs_script.js
//OUTPUT: Retreat from the xupptumblers

//if we run -> ./yargs_script.js --ships=4 --distance=22
//OUTPUT: Plunder more riffiwobles

//if we run -> ./yargs_script.js --ships 12 --distance 98.7
//OUTPUT: Retreat from the xupptumblers
