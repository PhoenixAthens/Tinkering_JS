const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
module.exports = (questions, done) => {
  const answers = [];
  const [firstQuestion] = questions; //this is the destructuring syntax which results in assignment of questions[0] to firstQuestion
  const questionAns = (answer) => {
    answers.push(answer.trim());
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAns);
    } else {
      return done(answers);
    }
  };
  rl.question(firstQuestion, questionAns);
};
