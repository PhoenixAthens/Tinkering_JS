const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?",
];
const answers = [];
function ask(i = 0) {
  process.stdout.write(`${questions[i]}`);
}
ask();
process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});
process.on("exit", () => {
  process.stdout.write(
    `Go ${answers[1]} for now, ${answers[0]}, do ${answers[2]} later!`,
  );
});
