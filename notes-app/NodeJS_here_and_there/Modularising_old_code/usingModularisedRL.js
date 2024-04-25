const collectAns = require("./lib/usingRL.js");
const process = require("process");
const questions = [
  "What is your name?",
  "Where do you live?",
  "What are you going to do with Node.js",
];

collectAns(questions, (answers) => {
  console.log("Thank you for your answers");
  console.log(answers);
  process.exit();
});
// What is your name?Juli
// Where do you live?japan
// What are you going to do with Node.jsjujutsu
// Thank you for your answers
// [ 'Juli', 'japan', 'jujutsu' ]
