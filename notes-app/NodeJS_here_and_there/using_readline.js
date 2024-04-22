const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let questions = [
  "What's your name? ",
  "You know what I am going to say next? ",
  "You know what I did last night? ",
];
let answers = [];

const questionAsk = (questions, done) => {
  const recur = (answer) => {
    answers.push(answer.trim());
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], recur);
    } else if (answers.length === questions.length) {
      done();
    }
  };
  rl.question(questions[0], recur);
};

questionAsk(questions, () => {
  console.log("\nLOGS:");
  for (let i = 0; i < questions.length; i++) {
    console.log(`${questions[i]} -> ${answers[i]}`);
  }

  process.exit();
});
