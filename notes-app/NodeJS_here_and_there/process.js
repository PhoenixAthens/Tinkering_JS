process.stdout.write("Hello there\n\n"); //this doesn't automatically add '\n' at the end of text
//Hello there
const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?",
];
const answers = [];
function ask(i) {
  process.stdout.write(`\n\n\n ${questions[i]}> `);
}
process.stdin.on("data", function (data) {
  process.stdout.write(data.toString().trim());
});
ask(answers.length);
